import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import db from "../../db.json";
import SearchDropdown from "../search-dropdown/search-dropdown.component";

const SearchBar: React.FC = () => {
  const [searchField, setSearchField] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };
  const { mens, women, best_sellers, kids } = db;
  const allItems = [...mens, ...women, ...best_sellers, ...kids];
  const searchedItems = allItems
    .filter((item) => {
      return item.title.toLowerCase().includes(searchField.toLowerCase());
    })
    .slice(0, 10);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <StyledSearchBar
        value={searchField}
        onChange={handleSearchChange}
        onBlur={handleClose}
        onFocus={handleOpen}
        placeholder="Search Items"
        sx={{
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "0 8px",
        }}
      />
      <SearchDropdown
        isOpen={isOpen && searchField !== ""}
        items={searchedItems}
      />
    </>
  );
};

export default SearchBar;

const StyledSearchBar = styled(Input)`
  && {
    width: 300px;
    @media (max-width: 1035px) {
      width: 250px;
    }
    @media (max-width: 980px) {
      width: 200px;
    }
    @media (max-width: 979px) {
      display: none;
    }
  }
`;
