const ImageThumb = ({ element }) => {

  return (
    <div className="flex justify-center">
      <img src={element.path} className="h-10" />
    </div>
  );
};

export default ImageThumb;
