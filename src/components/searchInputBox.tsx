import { useState } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  info?: string;
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

export const SearchInputBox: React.FC<Props> = (props) => {
  const { info } = props;
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
    origin: "",
  });

  const handelSubmit = () => {
    console.log("SearchInputBox handelSubmit");
  };

  return (
    <form onSubmit={handelSubmit}>
      <TextField
        style={{ width: "500px" }}
        name={info}
        margin="dense"
        label={info}
        size={"small"}
        variant="outlined"
        onChange={(e) =>
          setSearchHorse({ ...searchHorse, horseName: e.target.value })
        }
        value={searchHorse.horseName}
      />
    </form>
  );
};
