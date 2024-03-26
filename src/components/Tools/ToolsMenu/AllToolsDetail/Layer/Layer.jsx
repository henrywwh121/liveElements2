import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { setElementList } from "../../../../../features/elementsSlice";
import { useState } from "react";

const Layer = () => {
  const dispatch = useDispatch();
  const elementsList = useSelector((state) => state.elements.elementsList);

  const [list, setList] = useState(elementsList);

  const swapElements = (e) => {
    const source = e.source.index;
    const destination = e.destination.index;

    const newList = [...list];
    const temp = newList[source];
    newList[source] = newList[destination];
    newList[destination] = temp;

    setList(newList);
    dispatch(setElementList(newList));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg">Layer</div>
      <DragDropContext onDragEnd={swapElements}>
        <Droppable droppableId="drop-id">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-2"
            >
              {list.map((ele, index) => {
                return (
                  <Draggable key={ele.id} draggableId={ele.id} index={index}>
                    {(provided) => (
                      <div
                        className="border-2 p-2 rounded-lg"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {ele.id}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Layer;
