export default function Marquee({
  items,
  reverse = false,
  slow = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  slow?: boolean;
  className?: string;
}) {
  const group = (
    <div className="marquee__group">
      {items.map((item, index) => (
        <span className="marquee__item" key={`${item}-${index}`}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${slow ? "marquee--slow" : ""} ${className}`}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}
