import React, { useState } from "react";
import { Pane, SearchInput, Button, majorScale } from "evergreen-ui";
import { ISearchBarProps } from "./interfaces";

const SearchBar = ({ handleSearchButtonClick }: ISearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChangeSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      margin={majorScale(3)}
    >
      <SearchInput
        marginRight={majorScale(3)}
        onChange={handleChangeSearchTerm}
        value={searchTerm}
      />
      <Button onClick={() => handleSearchButtonClick(searchTerm)}>
        Get Recipes
      </Button>
    </Pane>
  );
};

export default SearchBar;
