import styled from "styled-components";

//Wrapper styled component to design components inside the image frame
export const Wrapper = styled.div`
  width: 100%;
  display: inline-block;

  .button {
    font-size: 40px;
    color: red;
    position: absolute;

    :hover {
      cursor: pointer;
      color: var(--lightGrey);
    }
  }
`;

// ImageContent wrapper to design frame size and outline of image.
export const ImageContent = styled.img`
  width: 100%;
  border-radius: 25px;
`;
