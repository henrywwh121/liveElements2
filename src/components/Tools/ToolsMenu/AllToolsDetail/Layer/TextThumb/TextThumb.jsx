import { useEffect, useState } from "react";

const TextThumb = ({ element }) => {
  const [styleObj, setStyleObj] = useState({});
  const [renderedElements, setRenderedElements] = useState([]);

  const elements = document.getElementsByClassName(element.id);

  useEffect(() => {
    const elementsArray = [...elements];
    const obj = { color: elementsArray[0].style.color };
    setStyleObj(obj);
    setRenderedElements(elementsArray);
  }, [elements]);

  return (
    <>
      {renderedElements.map((element, index) => (
        <div
          key={index}
          style={styleObj}
          dangerouslySetInnerHTML={{ __html: element.innerText }}
        />
      ))}
    </>
  );
};

export default TextThumb;
