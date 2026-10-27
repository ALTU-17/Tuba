"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScroll;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.03 + 11.7;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime * 0.045;

  vec2 q = vec2(
    fbm(p * 1.25 + vec2(0.0, t)),
    fbm(p * 1.25 + vec2(5.2, 1.3) - t * 0.7)
  );

  float f = fbm(p * 1.55 + q * 1.35 + vec2(0.0, -uScroll * 0.5));
  float glow = smoothstep(0.24, 0.95, f);

  vec3 ink = vec3(0.032, 0.025, 0.022);
  vec3 saffron = vec3(0.92, 0.56, 0.16);
  vec3 ember = vec3(0.58, 0.12, 0.07);

  vec3 col = mix(ink, ember, glow * 0.6);
  col = mix(col, saffron, pow(glow, 3.0) * 0.55);

  vec2 m = (uMouse - 0.5 * uRes) / uRes.y;
  float dist = length(p - m);
  col += saffron * 0.055 * smoothstep(0.8, 0.0, dist);

  col += ember * 0.4 * smoothstep(0.1, -0.95, p.y) * f;

  // rising embers
  vec2 sp = p * vec2(17.0, 13.0);
  sp.y += uTime * 0.26;
  vec2 id = floor(sp);
  vec2 gv = fract(sp) - 0.5;
  float h = hash(id);
  float twinkle = 0.55 + 0.45 * sin(uTime * 1.7 + h * 6.2831);
  float spark = smoothstep(0.07, 0.0, length(gv)) * step(0.972, h) * twinkle;
  col += vec3(1.0, 0.74, 0.36) * spark * 1.5;

  // vignette + grain
  col *= 1.0 - 0.52 * smoothstep(0.32, 1.25, length(p));
  float g = hash(gl_FragCoord.xy * 0.013 + fract(uTime)) - 0.5;
  col += g * 0.02;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function EmberCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compile(gl.VERTEX_SHADER, VERT);
    const frag = compile(gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vert || !frag || !program) return;

    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const pos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uScroll = gl.getUniformLocation(program, "uScroll");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 1;
    let height = 1;
    let frame = 0;
    let running = true;
    let started = performance.now();
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      target.x = width / 2;
      target.y = height / 2;
      current.x = target.x;
      current.y = target.y;
    };

    const draw = (now: number) => {
      current.x += (target.x - current.x) * 0.045;
      current.y += (target.y - current.y) * 0.045;
      gl.uniform2f(uRes, width, height);
      gl.uniform1f(uTime, (now - started) / 1000);
      gl.uniform2f(uMouse, current.x, current.y);
      gl.uniform1f(uScroll, window.scrollY / Math.max(1, window.innerHeight));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (running && !reduced) frame = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      target.x = (event.clientX - rect.left) * dpr;
      target.y = (rect.height - (event.clientY - rect.top)) * dpr;
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        started = performance.now() - 1000;
        if (!reduced) frame = requestAnimationFrame(draw);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          frame = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting) {
          running = false;
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0 },
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    draw(performance.now());

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
