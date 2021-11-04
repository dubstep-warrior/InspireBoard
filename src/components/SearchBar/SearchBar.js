import { Wrapper, Content } from "./SearchBar.styles";
import { useState } from "react";

const SearchBar = ({ setEGalleryQuery }) => {
  // Query state to save state of inputted query
  const [query, setQuery] = useState("");

  return (
    // Wrapper component to design outline of query content form
    <Wrapper>
      {/* Content component wrapper to design outline and form CSS */}
      <Content>
        {/* Form to contain input bar for typing down search query */}
        <form onSubmit={(env) => env.preventDefault()}>
          {/* Input that calls setQuery and setEgalleryQuery on value change, triggers a chain to an API call */}
          <input
            className="searchQuery"
            type="search"
            // To change value to searchQuery to maintain controlled component
            value={query}
            placeholder="Search Images"
            onChange={(env) => {
              setEGalleryQuery(env.target.value);
              setQuery(env.target.value);
            }}
          ></input>
        </form>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
