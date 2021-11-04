import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import ExploreBoard from "./components/ExploreBoard";
import HomeBoards from "./components/HomeBoards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import AddMenu from "./components/AddMenu/AddMenu";

function App() {
  //App level state for gallery boards on personal profile
  const [homeBoardGalleries, setHomeBoardGalleries] = useState([]);

  //App level state for gallery in explore page
  const [exploreGallery, setExploreGallery] = useState([]);

  //App level state for image to be added to personal boards
  const [imgToBeAdded, setImgToBeAdded] = useState({});

  //Access Key to call from unsplash API
  const accessKey = "MqetB-of4YCNAGEJ5uK0jVI-1a6L7yA4XSn3fuK4kIc";

  //Loads up explore gallery on start up
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.unsplash.com/photos/?per_page=30&client_id=${accessKey}`,
      responseType: "json",
    }).then(async (res) => {
      const newGallery = await res.data.map((element) =>
        Object.assign({
          key: element.id,
          src: element.urls.small,
          name: element.alt_description,
        })
      );
      console.log(res.data);
      console.log("retrieving");
      console.log(newGallery);
      setExploreGallery(newGallery);
    });
  }, []);

  //Fetches more page data from unsplash to add to current explore gallery array
  const fetchMoreData = () => {
    let pageNo = exploreGallery.length / 30 + 1;
    const query = `query=${queryTerm}`;

    axios({
      method: "get",
      url:
        queryTerm.trim().length > 0
          ? `https://api.unsplash.com/search/photos/?${query}&page=${pageNo}&per_page=30&client_id=${accessKey}`
          : `https://api.unsplash.com/photos/?page=${pageNo}&per_page=30&client_id=${accessKey}`,
      responseType: "json",
    }).then(async (res) => {
      const array =
        queryTerm.trim().length > 0 ? await res.data.results : await res.data;
      const newGallery = await array.map((element) =>
        Object.assign({
          key: element.id,
          src: element.urls.small,
          name: element.alt_description,
        })
      );
      setExploreGallery([...exploreGallery, ...newGallery]);
    });
    console.log(pageNo);
  };

  //Tracks changes in explore gallery
  useEffect(() => {
    console.log("app level explore gallery");
    console.log(exploreGallery);
  }, [exploreGallery]);

  const updateHomeBoardGalleries = (galleries) => {
    setHomeBoardGalleries(galleries);
  };

  //Track changes in homeboardgalleries array
  useEffect(() => {
    console.log("app level homeboardgalleries");
    console.log(homeBoardGalleries);
  }, [homeBoardGalleries]);

  //Updates image to be added state so it can be added to selected personal board
  const handleOnAdd = (element) => {
    setImgToBeAdded(element);

    homeBoardGalleries.length > 0
      ? updateAddingState(true)
      : console.log("Error. There are no available galleries!");
  };

  //Tracks changes to image to be added state
  useEffect(() => {
    console.log("app level imgToBeAdded");
    console.log(imgToBeAdded);
  }, [imgToBeAdded]);

  //App level state to check if there is an image being added
  const [addingState, updateAddingState] = useState(false);

  //Tracks changes to addingState
  useEffect(() => {
    console.log("adding state is " + addingState);
  }, [addingState]);

  //Function that added image to be added to the selected gallery
  const addToGallery = (selectedGalleryIndex) => {
    console.log("before adding");
    console.log(imgToBeAdded);
    const newHBGalleries = homeBoardGalleries.map((element, index) =>
      index === selectedGalleryIndex
        ? {
            ...element,
            gallery: [...element.gallery, imgToBeAdded],
          }
        : element
    );

    setHomeBoardGalleries(newHBGalleries);

    console.log("image has been added to hbgallery");
    console.log(homeBoardGalleries);

    updateAddingState(false);
    setImgToBeAdded({});
  };

  //App level state for search query
  const [queryTerm, setQueryTerm] = useState("");

  //Reloads explore gallery with new images based on current search query term
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setExploreGallery([]);

      const query = `query=${queryTerm}`;
      console.log("query is " + query);
      axios({
        method: "get",
        url:
          queryTerm.trim().length > 0
            ? `https://api.unsplash.com/search/photos/?${query}&per_page=30&client_id=${accessKey}`
            : `https://api.unsplash.com/photos/?per_page=30&client_id=${accessKey}`,
        responseType: "json",
      }).then(async (res) => {
        console.log(res);
        const array =
          queryTerm.trim().length > 0 ? await res.data.results : await res.data;
        console.log("this await ARRAY");
        console.log(array);
        const newGallery = await array.map((element) =>
          Object.assign({
            key: element.id,
            src: element.urls.small,
            name: element.alt_description,
          })
        );

        setExploreGallery([...newGallery]);
      });
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [queryTerm]);

  return (
    <Router>
      <div className="App">
        {/* Header contains buttons for home button and personal boards button */}
        <Header />
        {/* Route into the homepage */}
        <Route exact path="/">
          {/* Displays addmenu component if addingState is true */}
          {addingState ? (
            <AddMenu
              hbGalleries={homeBoardGalleries}
              addToGallery={addToGallery}
            />
          ) : null}
          {/* Displays gallery of images taken from calling unsplashs API */}
          <ExploreBoard
            thisGallery={exploreGallery}
            fetchMoreData={fetchMoreData}
            onAdd={handleOnAdd}
            setEGalleryQuery={setQueryTerm}
          />
        </Route>

        {/* Route into personal boards */}
        <Route path="/personal">
          {/* Displays the HomeBoard of images */}
          <HomeBoards
            hBGalleries={homeBoardGalleries}
            galleriesIsUpdated={updateHomeBoardGalleries}
          />
        </Route>

        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
