import { Wrapper, ImageContent } from "./Image.styles";
import { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { IoIosAddCircleOutline } from "react-icons/io";

const Image = ({ element, index, onDelete, boardImage, onAdd }) => {
  //Button display state to reflect if button should be displayed. State value manipulated by click events.
  const [buttonDisplay, updateButtonDisplay] = useState(false);

  //handleClick function called onclick to change buttonDisplay state
  const handleClick = (env) => {
    env.preventDefault();
    updateButtonDisplay(!buttonDisplay);
  };

  //useEffect to update buttonDisplay state to false when onDelete function is called.
  useEffect(() => {
    updateButtonDisplay(false);
  }, [onDelete]);

  //useEffect to update buttonDisplay state to false when onAdd function is called.
  useEffect(() => {
    updateButtonDisplay(false);
  }, [onAdd]);

  return (
    <>
      {/* Wrapper component to design and organize components inside */}
      <Wrapper>
        {/* To display delete logo when buttonDisplay is true and boardImage is true */}
        {buttonDisplay && boardImage ? (
          <TiDelete
            id={index}
            className="button"
            onClick={() => onDelete(index)}
          />
        ) : null}
        {/* To display add logo when buttonDisplay is true and boardImage is false */}
        {buttonDisplay && !boardImage ? (
          <IoIosAddCircleOutline
            className="button"
            style={{ color: "green" }}
            onClick={() => {
              onAdd(element);
            }}
          />
        ) : null}
        {/* ImageContent Wrapper for image*/}
        <ImageContent
          onClick={(env) => handleClick(env)}
          src={element.src ? element.src : element}
          alt=""
          className="images"
        />
      </Wrapper>
    </>
  );
};

export default Image;
