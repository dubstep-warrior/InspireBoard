import styled from "styled-components";

//Styled component to design wrap the "add new board" footer
export const Wrapper = styled.div`
  height: 50px;

  :hover {
    cursor: pointer;
  }
`;

//Add New Frame Wrapper to design the middle of the "Add New Board" Footer.
export const AddNewFrame = styled.div`
  position: relative;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: ${props => props.hover ? 'rgba(255,0,0,1)' : 'rgba(255,0,0,0.4)'};
  border:${props => props.hover ? '.5px solid red' : 'none'};

  .newBoardText {
    margin: auto;
    font-size: 20px;
    font-weight: ${props => props.hover ? 'bold' : 'normal'};
    color: ${props => props.hover ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.4)'};
    width: 200px;
    background-color: white;
    position: relative;
    top: -14px;
    text-align: center;
    /* border: 1px solid black; */
  }
`;
