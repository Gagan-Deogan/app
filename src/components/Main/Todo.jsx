import more from "../../assets/more.png";
import message from "../../assets/comment.png";
import file from "../../assets/file.png";
import { useRef, useState } from "react";
import { data } from "./data";
import add from "../../assets/add-square.png";

export const Todo = () => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragInfo = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log("drag start", params);
    dragInfo.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handlerDragEnd);
    setDragging(true);
    // setTimeout(() => {
    //   setDragging(true);
    // }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("Entering a drag target", params);
    const currentItem = dragInfo.current;
    if (e.target !== dragNode.current) {
      console.log("Target is NOT the same as dragged item");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log("Target is NOT the same as dragged item", {
          newList,
          grpI: params.grpI,
          id: newList[params.grpI],
          id2: newList[currentItem.grpI],
          id3: currentItem.grpI,
        });

        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI]?.items.splice(currentItem.itemI, 1)[0]
        );
        dragInfo.current = params;
        return newList;
      });
    }
  };

  const handlerDragEnd = () => {
    console.log("ending drag");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handlerDragEnd);
    dragInfo.current = null;
    dragNode.current = null;
  };
  const getPriority = (priority) => {
    if (priority === "Low") {
      return "badge-square low";
    } else if (priority === "High") {
      return "badge-square high";
    } else if (priority === "Complete") {
      return "badge-square completed";
    }
  };

  const getStyles = (item) => {
    if (
      dragInfo.current.grpI === item.grpI &&
      dragInfo.current.itemI === item.itemI
    ) {
      return "card mb-20";
    }
    return "card mb-20";
  };

  return (
    <>
      {list.map((dataInfo, grpI) => (
        <div
          className="section"
          onDragEnter={
            dragging && !dataInfo.items.length
              ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
              : null
          }
        >
          <div className="space-between mb-20">
            <div className="flex-row gap-8">
              <div className="badge badge-blue"></div>
              <div className="sec-heading"> {dataInfo.title} </div>
              <div className="counter">4</div>
            </div>
            <img src={add} alt="" />
          </div>
          {dataInfo.title === "To Do" ? (
            <div className="process-bar mb-30"></div>
          ) : null}
          {dataInfo.title === "In Progress" ? (
            <div className="process mb-30"></div>
          ) : null}
          {dataInfo.title === "Done" ? (
            <div className="done mb-30"></div>
          ) : null}

          {dataInfo.items.map((ele, itemI) => (
            <div
              className={dragging ? getStyles({ grpI, itemI }) : "card mb-20"}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
              onDragEnter={
                dragging
                  ? (e) => {
                      handleDragEnter(e, { grpI, itemI });
                    }
                  : null
              }
              key={ele.id}
            >
              <div className="space-between mb-4">
                <div className={getPriority(ele.priority)}>{ele.priority}</div>
                <img src={more} alt="" />
              </div>
              <div className="card-heading mb-6">{ele.heading}</div>
              {ele.subHeading && (
                <div className="card-subheading mb-8">{ele.subHeading}</div>
              )}

              {ele.image &&
                ele.image.map((img) =>
                  ele.image.length > 1 ? (
                    <img src={img.image} alt="image" className="ml-8" />
                  ) : (
                    <img src={img.image} alt="image" className="card-image" />
                  )
                )}

              <div className="card-footer  space-between">
                <div className="">
                  {ele.people.map((img, i) => (
                    <img
                      src={img.image}
                      className={i !== 0 ? "ml-4neg" : ""}
                      alt=""
                    />
                  ))}
                </div>

                <div className="flex-row gap-14">
                  <button className="logo-muted-btn flex-row gap-4">
                    <img src={message} alt="" />
                    {ele.comments} comments
                  </button>
                  <button className="logo-muted-btn flex-row gap-4">
                    <img src={file} alt="" /> {ele.file} files
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
