import { useState } from "react";
import { useDispatch } from "react-redux";
import { setElementList } from "../../../../../features/elementsSlice";
import saves from "/saves/saves.json";

const LoadSave = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {saves.map((save) => (
          <div
            key={save.id}
            onClick={() => {
              dispatch(setElementList(save.data));
            }}
          >
            {save.name}
          </div>
        ))}
      </div>
      <div>Load</div>
    </div>
  );
};

export default LoadSave;
