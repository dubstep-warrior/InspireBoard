import styled from "styled-components";

//Wrapper to design layout of navigational bar
export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--medGrey);
`;

//Content Wrapper to organise navigational components
export const Content = styled.div`
  width: 1000px;
  height: 50px;
  margin: auto;
  padding-top: 6px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

//Logo Wrapper to design image positioning and padding etc.
export const Logo = styled.img`
  width: 152px;
  float: left;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 25px;

  :hover {
    background-color: var(--darkGrey);
  }
`;

//Icon Wrapper to design logo that it's wrapped around
export const Icon = styled.div`
  width: 50px;
  height: 47px;
  float: right;

  .profile {
    color: white;
    font-size: 40px;
    margin-top: 10%;
  }

  :hover .profile {
    color: black;
  }
`;
