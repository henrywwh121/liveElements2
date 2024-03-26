import { GoScreenFull } from "react-icons/go";
import { SubsAttributes } from "../SubToolsConstants";
import { useSelector } from "react-redux";

const FullScreen = () => {
  const containerRef = useSelector((state) => state.elements.containerRef);

  const toggleFullScreen = () => {
    const ele = containerRef.current;
    const isFullScreen = document.fullscreenElement;

    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      ele.requestFullscreen();
    }
  };

  return (
    <GoScreenFull
      size={SubsAttributes.ICONSIZE}
      className="cursor-pointer"
      onClick={() => {
        toggleFullScreen();
      }}
    />
  );
};

export default FullScreen;
