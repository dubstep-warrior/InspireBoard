import { useState } from "react";
import { Wrapper , AddNewFrame } from "./Footer.styles";

const Footer = ({onAdd}) => {
  // isShown state manipulated by mouse hovers. Shows "Add New Board" option in personal boards
  const [isShown, setShown] = useState(false);

  return (
    // Wrapper for layout and design of add new board footer
    <Wrapper
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick = {onAdd}
    >
     {/* Add New Frame styled component wrapper for designing and layout of button */}
    <AddNewFrame hover={isShown}><div className="newBoardText"> ADD NEW BOARD </div></AddNewFrame>
    </Wrapper>
  );
};

export default Footer;
