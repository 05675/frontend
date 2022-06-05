import { useState } from "react";
import axios from "axios";
import { HorseInfo } from "types/api/horseInfo";

export const SearchHorseInfo = () => {
  const [searchHorseInfo, setSearchHorseInfo] = useState({});

  /**
   * TODO: 性別のクエリパラメータの作成
   */
  const getSearchHorseInfo = async (params: HorseInfo) => {
    try {
      // TODO: URLを「/api/horseinfoes」の記載だけで済むようにしたい
      const res = await axios.get("https://localhost:5001/api/horseinfoes", {
        params: {
          horseName: params.horseName,
          birthday: params.birthday,
          father: params.father,
          mother: params.mother,
          motherFather: params.motherFather,
          motherMother: params.motherMother,
          male: params.male,
          wife: params.wife,
          counterfeit: params.counterfeit,
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
