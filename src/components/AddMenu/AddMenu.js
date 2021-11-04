import { Wrapper, GalleryWrap, Content, AddCfmBtn } from "./AddMenu.styles";
import { useState, useEffect } from "react";

const AddMenu = ({ hbGalleries, addToGallery }) => {
  console.log(hbGalleries);

  //Set gallerySelection state to add image to using react hook
  const [gallerySelection, setGallerySelection] = useState(hbGalleries);

  //Changes to homeboard galleries in app level state affects the gallery selection
  useEffect(() => setGallerySelection(hbGalleries), [hbGalleries]);

  //selectedGalleryIndex to track which gallery has been selected by user prior to submiting form
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState();

  //Function called when form is submitted , addToGallery is called, adding selected image state in app level into selected gallery using selectedGalleryIndex
  const handleClick = () => {
    addToGallery(selectedGalleryIndex);
    setSelectedGalleryIndex(-1);
  };

  return (
    // Add Menu styled components serve as wrappers for design and layout.
    <Wrapper>
      {/* Gallery Wrap styled components serve as wrappers for design and layout. */}
      <GalleryWrap>
        {gallerySelection.map((element, index) => (
          // Content Wrapper for gallery names
          <Content
            key={index}
            focus={selectedGalleryIndex === index}
            onClick={() => setSelectedGalleryIndex(index)}
          >
            {element.name}
          </Content>
        ))}
      </GalleryWrap>
      {/* Add confirm button wrapper to design submit button */}
      <AddCfmBtn
        onClick={() => {
          handleClick();
        }}
      >
        ADD
      </AddCfmBtn>
    </Wrapper>
  );
};

export default AddMenu;
