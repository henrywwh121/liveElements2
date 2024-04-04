import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setElementList } from "../../../../../features/elementsSlice";
import { setElementOrder } from "../../../../../features/elementsSlice";
import saves from "/saves/saves.json";

const LoadSave = () => {
  const dispatch = useDispatch();
  const [storageSaves, setStorageSaves] = useState();
  const [select, setSelect] = useState({});

  let elementsList = useSelector((state) => state.elements.elementsList);

  useEffect(() => {
    if (localStorage.getItem("liveElementsData") == null) {
      localStorage.setItem("liveElementsData", JSON.stringify(saves));
      setStorageSaves(JSON.stringify(saves));
    } else {
      setStorageSaves(localStorage.getItem("liveElementsData"));
    }
  }, []);

  const saveData = () => {
    const id = select.id;
    let newSave = [...JSON.parse(storageSaves)];
    newSave[id] = {
      id: id,
      name: "Save-" + id,
      data: elementsList,
    };
    setStorageSaves(JSON.stringify(newSave));
    localStorage.setItem("liveElementsData", JSON.stringify(newSave));
  };

  const downloadData = () => {
    const jsonData = storageSaves;
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "saves.json"; // Set the desired file path here
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-between h-full gap-2">
      {storageSaves &&
        JSON.parse(storageSaves).map((save) => (
          <div
            key={save.id}
            onClick={() => {
              setSelect(save);
            }}
            className={`h-[40px] border-2 rounded-lg cursor-pointer justify-center flex items-center font-bold ${
              select.id == save.id && "border-blue-300"
            }`}
          >
            {save.name}
          </div>
        ))}
      <div className="flex justify-between">
        <div
          onClick={() => {
            saveData();
          }}
          className="cursor-pointer"
        >
          Save
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch(setElementList(select.data));
            dispatch(setElementOrder(select.order));
          }}
        >
          Load
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            downloadData();
          }}
        >
          Download
        </div>
      </div>
    </div>
  );
};

export default LoadSave;
