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
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ErrorMessage, HorseName } from "utils/validation";
import { SearchHorseInfo } from "hooks/searchHorseInfo";

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
 * TODO:
 * 検索結果を表示する
 */

export const SearchArea: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm({
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

  const { searchHorseInfo, setSearchHorseInfo, getSearchHorseInfo } =
    SearchHorseInfo();

  const onSubmit = useCallback(
    (data: Info) => {
      getValues();
      console.log("test data:", data);
      getSearchHorseInfo(data);
    },
    [getSearchHorseInfo, getValues]
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
                  <Controller
                    name="horseName"
                    control={control}
                    render={() => (
                      <TextField
                        error={Boolean(errors.horseName)}
                        style={{ width: "500px" }}
                        margin="dense"
                        label="馬名"
                        size={"small"}
                        variant="outlined"
                        {...register("horseName", HorseName)}
                        helperText={ErrorMessage(errors.horseName)}
                      />
                    )}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  父
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    error={Boolean(errors.father)}
                    style={{ width: "500px" }}
                    margin="dense"
                    label="父"
                    size={"small"}
                    variant="outlined"
                    {...register("father", HorseName)}
                    helperText={ErrorMessage(errors.father)}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  母
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    error={Boolean(errors.mother)}
                    style={{ width: "500px" }}
                    margin="dense"
                    label="母"
                    size={"small"}
                    variant="outlined"
                    {...register("mother", HorseName)}
                    helperText={ErrorMessage(errors.mother)}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  母父
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    error={Boolean(errors.motherFather)}
                    style={{ width: "500px" }}
                    margin="dense"
                    label="母父"
                    size={"small"}
                    variant="outlined"
                    {...register("motherFather", HorseName)}
                    helperText={ErrorMessage(errors.motherFather)}
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
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="牡"
                      labelPlacement="start"
                      {...register("sex")}
                    />
                    <FormControlLabel
                      control={<Checkbox color="secondary" />}
                      label="牝"
                      labelPlacement="start"
                      {...register("sex")}
                    />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="騙"
                      labelPlacement="start"
                      {...register("sex")}
                    />
                  </FormGroup>
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
