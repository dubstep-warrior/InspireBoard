import MainFrame from "./MainFrame/MainFrame";
import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";

const HomeBoards = ({ hBGalleries, galleriesIsUpdated }) => {
  // Component level state of galleries
  const [galleries, updateGalleries] = useState(hBGalleries);

  // Function to add a new board into galleries array
  const addNewBoard = (env) => {
    env.preventDefault();
    const newGallery = {
      index: galleries.length,
      name: "Board " + (galleries.length + 1),
      gallery: [],
    };
    const newGalleries = galleries.concat(newGallery);
    galleriesIsUpdated(newGalleries);
  };

  //Checking if galleries are properly tracked
  useEffect(() => updateGalleries(hBGalleries), [hBGalleries]);

  //Updates gallery array on change
  const galleryIsUpdated = (gallery, index) => {
    const newGalleries = galleries.map((element, id) =>
      id === index ? Object.assign({ ...element, gallery: gallery }) : element
    );
    console.log("homeboard level");
    console.log(newGalleries);
    galleriesIsUpdated(newGalleries);
  };

  //Updates gallery name on change
  const galleryNameIsUpdated = (name, index) => {
    const newGalleries = galleries.map((element, id) =>
      id === index ? Object.assign({ ...element, name: name }) : element
    );
    galleriesIsUpdated(newGalleries);
  };

  //remove gallery in galleries
  const galleryIsRemoved = (index) => {
    const newGalleries = galleries.filter((element, id) => {
      return id !== index;
    });
    galleriesIsUpdated(newGalleries);
  };

  return (
    <>
      {/* Maps each homeboard array in the galleries array to a MainFrame component */}
      {galleries.map(({ name, gallery }, index) => (
        <MainFrame
          key={index}
          index={index}
          name={name}
          myGallery={gallery}
          galleryIsUpdated={galleryIsUpdated}
          galleryNameIsUpdated={galleryNameIsUpdated}
          deleteThisGallery={galleryIsRemoved}
          homeBoard={true}
        />
      ))}
      {/* Footer displayed for users to click and add new boards into galleries array */}
      <Footer onAdd={addNewBoard} />
    </>
  );
};

export default HomeBoards;
