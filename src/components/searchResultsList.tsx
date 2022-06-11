import React, { useEffect, useMemo } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { SearchHorseInfo } from "hooks/searchHorseInfo";
import { useLocation } from "react-router";
import { HorseInfo } from "types/horseInfo";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#135ef2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const handleChangePage = () => {
  console.log("test");
};

export const SearchResultsList: React.FC = () => {
  const { searchHorseInfo, getSearchHorseInfo } = SearchHorseInfo();
  const location = useLocation();

  const state = useMemo(() => {
    return location.state as { search: HorseInfo };
  }, [location.state]);

  useEffect(() => {
    getSearchHorseInfo(state.search);
  }, [state.search, getSearchHorseInfo]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>馬名</StyledTableCell>
            <StyledTableCell>性別</StyledTableCell>
            <StyledTableCell>馬名意味</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchHorseInfo ? (
            searchHorseInfo.map((row: HorseInfo, _i: number) => (
              <StyledTableRow key={_i}>
                <StyledTableCell component="th" scope="row">
                  {row.horseName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sex}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.horseNameMeaning}
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <></>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={1}
              page={3}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
