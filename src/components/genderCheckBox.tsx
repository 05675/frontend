import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  label?: string;
  size?: string;
}

export const GenderCheckBox: React.FC<Props> = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        value="牡"
        control={<Checkbox />}
        label="牡"
        labelPlacement="start"
      />
      <FormControlLabel
        value="牝"
        control={<Checkbox color="secondary" />}
        label="牝"
        labelPlacement="start"
      />
      <FormControlLabel
        value="騙"
        control={<Checkbox color="success" />}
        label="騙"
        labelPlacement="start"
      />
    </FormGroup>
  );
};
