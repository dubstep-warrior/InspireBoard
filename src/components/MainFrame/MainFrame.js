import { React, useState, useEffect } from "react";
import Image from "../Image/Image";
import { Wrapper, Header } from "./MainFrame.styles";
import Dropzone from "react-dropzone";
import { IoAddSharp } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import InfiniteScroll from "react-infinite-scroll-component";

const MainFrame = ({
  index,
  name = `Board ${index + 1}`,
  myGallery,
  galleryIsUpdated,
  galleryNameIsUpdated,
  deleteThisGallery,
  homeBoard,
  fetchMoreData,
  onAdd,
}) => {
  // Gallery state containing array data containing images
  const [gallery, setGallery] = useState(myGallery);
  // boardNameVal state containing the name of the board.
  const [boardNameVal, setBoardName] = useState(name);

  // useEffect to debug by console logging myGallery state
  useEffect(() => {
    console.log("mainframe gallery is");
    console.log(myGallery);
  }, [myGallery]);

  // updateGallery function called local file is added
  const updateGallery = (files) => {
    const image = {
      ...files[0],
      src: URL.createObjectURL(files[0]),
    };
    const newGallery = [...gallery, image];
    console.log("getting newgallery");
    console.log(newGallery);
    galleryIsUpdated(newGallery, index);
  };

  //deleteOnGallery function when file in board is deleted.
  const deleteOnGallery = (imageIndex) => {
    console.log("index to be deleted is " + imageIndex);
    const newGallery = gallery.filter((element, i) => {
      return i !== imageIndex;
    });
    console.log(imageIndex + " is removed");

    console.log(newGallery);
    galleryIsUpdated(newGallery, index);
  };

  //delBtnHovered state used for popup delete button on deleting gallery board.
  const [delBtnHovered, setDelBtnHovered] = useState(false);

  // delBtnStyle used for styling of popup delete button
  const delBtnStyle = {
    border: "1px solid black",
    display: "block",
    padding: "10px",
    width: "70px",
    margin: "auto",
    textAlign: "center",
    background: `${delBtnHovered ? "red" : "white"}`,
    cursor: `${delBtnHovered ? "pointer" : "default"}`,
    borderRadius: "none",
  };

  // updateBoardName function called to update gallery name. Function passes event to function called from component that called mainframe.
  const updateBoardName = (event) => {
    galleryNameIsUpdated(event.target.value, index);
  };
  console.log(myGallery);

  // handleSubmit function to handle form submission text space for board name and prevent default
  const handleSubmit = (env) => {
    env.preventDefault();
    console.log(index);
    document.getElementById("bN" + index).blur();
    console.log(boardNameVal);
  };

  //when bin button is clicked , deleteThisGallery function is called to component that created mainframe
  const handleDeleteGallery = () => {
    deleteThisGallery(index);
  };

  //When gallery state is changed , gallery state is resetted and console.log for debug purposes
  useEffect(() => {
    setGallery(myGallery);
    console.log("gallery level");
    console.log(myGallery);
  }, [myGallery]);

  //When gallery name state is changed, setBoardName is called to set board name to new name state
  useEffect(() => {
    setBoardName(name);
  }, [name]);

  return (
    <>
      <br></br>
      {/* Header for mainframe displays only if homeBoard state is true */}
      {homeBoard ? (
        // Header Wrapper for the mainframe. Contains a form for board name value, drop button and delete button.
        <Header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id={"bN" + index}
              className="boardName"
              value={boardNameVal}
              onChange={updateBoardName}
              placeholder="Enter Board Name Here..."
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
          <div className="btns">
            <Dropzone onDrop={(acceptedFiles) => updateGallery(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className="dropBtn">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <IoAddSharp className="addIcon" />
                  </div>
                </section>
              )}
            </Dropzone>
            {/* Popup component that shows delete button logo as trigger to popup. Used to confirm deletion of gallery */}
            <Popup
              trigger={
                <div className="delBtn">
                  <ImBin className="deleteIcon" />
                </div>
              }
              position="right center"
              contentStyle={{ height: "120px" }}
            >
              <div
                style={{
                  height: "50px",
                  padding: "10px",
                }}
              >
                Are you sure you want to delete{" "}
                {boardNameVal ? <b>{boardNameVal}</b> : `this`} board?
              </div>
              <button
                style={delBtnStyle}
                onMouseEnter={() => setDelBtnHovered(true)}
                onMouseLeave={() => setDelBtnHovered(false)}
                onClick={handleDeleteGallery}
              >
                Delete
              </button>
            </Popup>
          </div>
        </Header>
      ) : null}

      <br></br>
      {/* Wrapper styled component for wrapping mainframe components */}
      <Wrapper className="mainFrame">
        {/* Infinite scroll component fromm react-infinite-scroll-component to facilitate infinite scrolling of new pictures in explore board*/}
        <InfiniteScroll
          dataLength={gallery.length}
          next={fetchMoreData}
          hasMore={!homeBoard && gallery.length < 500}
          loader={
            gallery.length < 500 ? (
              <h4 style={{ margin: "auto" }}>Loading...</h4>
            ) : null
          }
        >
          {gallery.map((image, imageIndex) => (
            // Image component from image folder. Gallery array of image data passed props into the image component.
            <Image
              element={image}
              key={image.id ? image.id : imageIndex}
              index={imageIndex}
              onDelete={deleteOnGallery}
              boardImage={homeBoard}
              onAdd={onAdd}
            />
          ))}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
};

export default MainFrame;
