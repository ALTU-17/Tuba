"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

/**
 * Optional 3D layer. Drop a Spline scene URL into NEXT_PUBLIC_SPLINE_SCENE
 * and it renders behind the hero content, above the ember shader.
 * Without the env var, the site stays on the lightweight WebGL scene.
 */
export default function SplineStage({ scene }: { scene: string }) {
  return (
    <div className="spline-stage" aria-hidden="true">
      <Spline scene={scene} />
    </div>
  );
}
