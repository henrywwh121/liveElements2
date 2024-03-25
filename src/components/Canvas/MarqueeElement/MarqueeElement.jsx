import "./Marquee.css";

const MarqueeElement = ({ data }) => {
  return (
    <div
      className={`${data.id} absolute marquee target`}
      style={{
        width: `${data.width}px`,
        height: `${data.height}px`,
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        backgroundColor: `${data.backgroundColor}`,
        color: `${data.color}`,
        fontSize: `${data.fontSize}px`,
      }}
    >
      <span
        className="animate-marquee"
        style={{
          animation: `marquee ${data.text.length / 2}s linear infinite`,
        }}
      >{`${data.text}`}</span>
    </div>
  );
};

export default MarqueeElement;
