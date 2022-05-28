import { useState } from "react";
import axios from "axios";
import { HorseInfo } from "types/api/horseInfo";

export const SearchHorseInfo = () => {
  const [searchHorseInfo, setSearchHorseInfo] = useState({});

  /**
   * TODO: 性別のクエリパラメータの作成
   */
  const getSearchHorseInfo = async (params: HorseInfo) => {
    console.log("test params:", params);
    try {
      const res = await axios.get("/api/horseinfoes", {
        params: {
          horseName: params.horseName,
          birthday: params.birthday,
          father: params.father,
          mother: params.mother,
          motherFather: params.motherFather,
          motherMother: params.motherMother,
          sex: params.sex,
          coatColor: params.coatColor,
          horseNameMeaning: params.horseNameMeaning,
          horseOwner: params.horseOwner,
          trainer: params.trainer,
          productionRanch: params.productionRanch,
          origin: params.origin,
        },
      });
      setSearchHorseInfo(res);
    } catch (e) {
      console.error(e);
    }
  };
  return { searchHorseInfo, setSearchHorseInfo, getSearchHorseInfo };
};
