import MainFrame from "./MainFrame/MainFrame";
import SearchBar from "./SearchBar/SearchBar";
import React, { useState, useEffect } from "react";

const ExploreBoard = ({
  thisGallery,
  fetchMoreData,
  onAdd,
  setEGalleryQuery,
}) => {
  //Component level state for exploreGallery array.
  const [exploreGallery, setExploreGallery] = useState(thisGallery);

  //Changes in thisGallery prop passed down resets exploreGallery array to the updated thisGallery
  useEffect(() => {
    setExploreGallery(thisGallery);
  }, [thisGallery]);

  return (
    <>
      {/* SearchBar to set search query */}
      <SearchBar setEGalleryQuery={setEGalleryQuery} />
      {/* MainFrame used to display array of images from exploreGallery */}
      <MainFrame
        name="Explore"
        myGallery={exploreGallery}
        homeBoard={false}
        fetchMoreData={fetchMoreData}
        onAdd={onAdd}
      />
    </>
  );
};

export default ExploreBoard;
