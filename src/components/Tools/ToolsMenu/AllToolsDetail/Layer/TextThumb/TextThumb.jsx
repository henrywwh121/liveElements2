const TextThumb = ({ element }) => {
  return (
    <div style={{ fontWeight: element.fontWeight, color: element.color }}>
      {element.text}
    </div>
  );
};

export default TextThumb;
