import * as React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  label?: string;
}

export const SearchButton: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <Button variant="contained">
      <SearchIcon sx={{ fontSize: 15 }} />
      &nbsp;{label}
    </Button>
  );
};
