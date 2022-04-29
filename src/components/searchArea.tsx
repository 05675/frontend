/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { horseInfoData } from "../constants/data";
import { GenderCheckBox } from "../components/genderCheckBox";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { SearchInputBox } from "./searchInputBox";
import { SearchButton } from "./searchButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

interface Props {
  label?: string;
}

interface Info {
  horseName?: string;
  birthday?: string;
  father?: string;
  mother?: string;
  motherFather?: string;
  motherMother?: string;
  sex?: string;
  coatColor?: string;
  horseNameMeaning?: string;
  horseOwner?: string;
  trainer?: string;
  productionRanch?: string;
  origin?: string;
}

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

/**
 * @param props
 * @returns
 *
 * TODO: 性別のチェックボックスから情報を取得
 * TODO: 各Inputにエラーチェック。
 * 馬名系：カタカナのみ
 * 他：漢字も
 */

export const SearchArea: React.FC<Props> = (props) => {
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      horseName: "",
      father: "",
      mother: "",
      motherFather: "",
      motherMother: "",
      sex: "",
      coatColor: "",
      horseNameMeaning: "",
      horseOwner: "",
      trainer: "",
      productionRanch: "",
      origin: "",
    },
  });

  const onSubmit = useCallback(
    (data: Info) => {
      getValues();
      console.log("test:", data);
    },
    [getValues]
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">
                  <ScreenSearchDesktopIcon />
                  <span
                    style={{
                      position: "relative",
                      bottom: "5px",
                      left: "10px",
                    }}
                  >
                    馬名検索
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  馬名
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="馬名"
                    size={"small"}
                    variant="outlined"
                    {...register("horseName")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  父
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="父"
                    size={"small"}
                    variant="outlined"
                    {...register("father")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  母
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="母"
                    size={"small"}
                    variant="outlined"
                    {...register("mother")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  母父
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="母父"
                    size={"small"}
                    variant="outlined"
                    {...register("motherFather")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  調教師
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="調教師"
                    size={"small"}
                    variant="outlined"
                    {...register("trainer")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  馬主
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="馬主"
                    size={"small"}
                    variant="outlined"
                    {...register("horseOwner")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  生産者
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="生産者"
                    size={"small"}
                    variant="outlined"
                    {...register("productionRanch")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  産地
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="産地"
                    size={"small"}
                    variant="outlined"
                    {...register("origin")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  馬名意味
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    style={{ width: "500px" }}
                    margin="dense"
                    label="馬名意味"
                    size={"small"}
                    variant="outlined"
                    {...register("horseNameMeaning")}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  component="th"
                  scope="row"
                  {...register("sex")}
                >
                  性別
                </StyledTableCell>
                <StyledTableCell align="left">
                  <GenderCheckBox />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" type="submit">
          <SearchIcon sx={{ fontSize: 15 }} />
          &nbsp;検索
        </Button>
      </form>
    </div>
  );
};
