import styled from "styled-components";

// Wrapper to design height of searchBar
export const Wrapper = styled.div`
  height: 70px;
`;

// Content wrapper to design width and searchQuery content CSS.
export const Content = styled.div`
  width: 1000px;
  margin: auto;

  .searchQuery {
    width: 100%;
    height: 40px;
    position: relative;
    top: 15px;
    border-radius: 50px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 30px;
  }
`;
