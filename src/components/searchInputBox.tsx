import { useState } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  info?: string;
  test?: (v: string) => void;
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
  const { info, test } = props;
  const [textValue, setTextValue] = useState("");
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTextValue(value);
  };

  const handelSubmit = () => {};

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
