import { E001, E002 } from "utils/message";

export const HorseName = {
  maxLength: 9,
  pattern: /^[ァ-ヶー　]+$/,
};

export const ErrorMessage = (errors: any) => {
  if (errors) {
    if (errors.type === "maxLength") {
      return E001;
    } else if (errors.type === "pattern") return E002;
  }
};
