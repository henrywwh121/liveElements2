import { useDispatch } from "react-redux";
import {
  setIsDragging,
  setSelectedImage,
} from "../../../../../features/designSlice";
import { useEffect, useState } from "react";

const DropImages = () => {
  const dispatch = useDispatch();

  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const images = Object.values(
    import.meta.glob("/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  );

  async function getPicturesWithDimensions() {
    try {
      setIsLoading(true);
      const pictureData = await Promise.all(
        images.map((picture) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                src: picture,
                width: img.width,
                height: img.height,
              });
            };
            img.onerror = (error) => {
              reject(error);
            };
            img.src = picture;
          });
        })
      );
      setPics(pictureData);
      setIsLoading(false);
      // You can access the width and height of each picture here
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPicturesWithDimensions();
  }, []);

  return (
    <div className="p-3 flex flex-row gap-2 flex-wrap">
      {pics.map((img) => (
        <img
          key={img.src}
          src={img.src}
          className="h-[90px] bg-slate-600 p-2 rounded-lg"
          onDrag={() => {
            dispatch(setSelectedImage(img));
            dispatch(setIsDragging(true));
          }}
        />
      ))}
    </div>
  );
};

export default DropImages;
