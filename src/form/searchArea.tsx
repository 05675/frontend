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
 * TODO: 各Inputにエラーチェックを入れる
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
                  <Controller
                    name="horseName"
                    control={control}
                    rules={{ required: "文字数" }}
                    render={() => (
                      <TextField
                        error={Boolean(errors.horseName)}
                        style={{ width: "500px" }}
                        margin="dense"
                        label="馬名"
                        size={"small"}
                        variant="outlined"
                        {...register("horseName", {
                          maxLength: 9,
                          // TODO: メソッド化する
                          pattern: /^[ァ-ヶー　]+$/,
                        })}
                        helperText={(() => {
                          // TODO: メソッド化する
                          if (errors.horseName)
                            if (errors.horseName.type === "maxLength")
                              return "馬名は9文字以内で入力して下さい";
                            else if (errors.horseName.type === "pattern")
                              return "全角カタカナで入力して下さい";
                        })()}
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
