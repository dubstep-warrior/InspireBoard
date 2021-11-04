import styled from "styled-components";

// Wrapper styled component to design the overall look and layout of the menu
export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background-color: white;
`;

//Gallery Wrap styled component to style the overall look and layout of gallery names inside menu
export const GalleryWrap = styled.div`
  height: 350px;
 `;

//Content styled component to display gallery names from homeBoard galleries
export const Content = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  background-color: ${(props) => (props.focus ? "rgba(0,0,0,0.4)" : null)};
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

//AddCfmBtn styled component as a wrapper to the form submission button.
export const AddCfmBtn = styled.div`
  position: relative;
  width: 70px;
  border: 1px solid black;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  padding: 15px;

  :hover {
    background-color: green;
    cursor: pointer;
  }
`;
