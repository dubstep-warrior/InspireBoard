import styled from "styled-components";

// Wrapper styled component for designing outline of mainframe
export const Wrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 20px 0px;

  @media screen and (max-width: 578px) {
    max-width: 90%;
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
    padding: 30px 0px;
  }
`;

// Header styled component for designing outline of mainframe header
export const Header = styled.div`
  width: 1000px;
  margin: auto;
  height: 50px;
  display: flex;

  /* Board Name input design */
  .boardName {
    position: relative;
    display: inline-block;

    border: none;
    width: 200%;
    top: 5px;

    height: 43px;
    font-size: 30px;

    :focus {
      outline: none;
    }
  }

  /* onDrop buttons design */
  .btns {
    width: 105px;
    display: inline-block;
    margin-left: 54%;

    .dropBtn {
      margin-top: 0px;
      max-width: 40px;
      float: left;
      height: 40px;
      padding: 5px;
      cursor: pointer;

      .addIcon {
        font-size: 40px;
        color: var(--medGrey);
      }

      :hover {
        background-color: var(--lightGrey);

        .addIcon {
          font-size: 40px;
          color: var(--darkGrey);
        }
      }
    }

    /* Delete button design */
    .delBtn {
      float: right;
      width: 40px;
      height: 40px;
      padding: 5px;
      cursor: pointer;

      .deleteIcon {
        margin-top: 10%;
        margin-left: 7%;
        font-size: 30px;
        color: var(--medGrey);
      }

      :hover {
        background-color: var(--lightGrey);

        .deleteIcon {
          font-size: 30px;
          color: var(--darkGrey);
        }
      }
    }
  }

  /* CSS resizing for browser width */
  @media screen and (max-width: 578px) {
    width: 90%;
    height: 40px;

    .boardName {
      width: 80%;
    }

    .btns {
      .dropBtn {
        height: 35px;
        padding: 0px;
        margin-top: 2%;

        .addIcon {
          font-size: 35px;
        }

        :hover .addIcon {
          font-size: 35px;
        }
      }
    }
  }
`;
