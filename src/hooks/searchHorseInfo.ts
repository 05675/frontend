import { useState } from "react";
import axios from "axios";
import { HorseInfo } from "../types/api/horseInfo";
import { HorseInfotest } from "../types/horseInfo2";

export const SearchHorseInfo = () => {
  const reqBody = {
    horseName: "キタサンブラック"
  };
  const [stateHorseInfo, setStateHorseInfo] = useState<Array<HorseInfotest>>(
    []
  );

  // 2. 引数にリクエストを入れる
  const getSearchHorseInfo = () => {
    axios
      .get<Array<HorseInfo>>("https://localhost:5001/api/horseinfoes/", {
        // TODO: ここにリクエストを入れる
        params: { father: "キング", mother: "ア" }
      })
      .then((res) => {
        const data = res.data.map((h) => ({
          hoseName: h.horseName,
          father: h.father,
          mother: h.mother,
          motherFather: h.motherFather
        }));
        // setStateHorseInfo(data);
      });
  };
  return { SearchHorseInfo, stateHorseInfo };
  // return { getUsers, userProfile, loading, error };
};
