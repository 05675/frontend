import * as React from "react";
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
import { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

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
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export const SearchArea: React.FC<Props> = (props) => {
  const [searchHorse, setSearchHorse] = useState<Info>({
    horseName: "",
    birthday: "",
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
    origin: ""
  });

  const onClick = () => {
    console.log("test:", searchHorse);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <ScreenSearchDesktopIcon />
                <span
                  style={{ position: "relative", bottom: "5px", left: "10px" }}
                >
                  お馬さん検索
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
                  name="馬名"
                  margin="dense"
                  label="馬名"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({
                      ...searchHorse,
                      horseName: e.target.value
                    })
                  }
                  value={searchHorse.horseName}
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
                  name="父"
                  margin="dense"
                  label="父"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({ ...searchHorse, father: e.target.value })
                  }
                  value={searchHorse.father}
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
                  name="母"
                  margin="dense"
                  label="母"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({ ...searchHorse, mother: e.target.value })
                  }
                  value={searchHorse.mother}
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
                  name="母父"
                  margin="dense"
                  label="母父"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({
                      ...searchHorse,
                      motherFather: e.target.value
                    })
                  }
                  value={searchHorse.motherFather}
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
                  name="調教師"
                  margin="dense"
                  label="調教師"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({ ...searchHorse, trainer: e.target.value })
                  }
                  value={searchHorse.trainer}
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
                  name="馬主"
                  margin="dense"
                  label="馬主"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({
                      ...searchHorse,
                      horseOwner: e.target.value
                    })
                  }
                  value={searchHorse.horseOwner}
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
                  name="生産者"
                  margin="dense"
                  label="生産者"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({
                      ...searchHorse,
                      productionRanch: e.target.value
                    })
                  }
                  value={searchHorse.productionRanch}
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
                  name="産地"
                  margin="dense"
                  label="産地"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({ ...searchHorse, origin: e.target.value })
                  }
                  value={searchHorse.origin}
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
                  name="馬名意味"
                  margin="dense"
                  label="馬名意味"
                  size={"small"}
                  variant="outlined"
                  onChange={(e) =>
                    setSearchHorse({
                      ...searchHorse,
                      horseNameMeaning: e.target.value
                    })
                  }
                  value={searchHorse.horseNameMeaning}
                />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                性別
              </StyledTableCell>
              <StyledTableCell align="left">
                <GenderCheckBox />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={onClick}>
        <SearchIcon sx={{ fontSize: 15 }} />
        &nbsp;検索
      </Button>
    </div>
  );
};
