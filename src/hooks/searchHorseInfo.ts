import { useState } from "react";
import axios from "axios";

export const SearchHorseInfo = () => {
  const [searchHorseInfo, setSearchHorseInfo] = useState({});
  console.log("test searchHorseInfo:", searchHorseInfo);

  /**
   * TODO: 以下のエラーを解消する
   * has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
   */
  const getSearchHorseInfo = async (params: object) => {
    console.log("test params:", params);
    try {
      const res = await axios.get(
        "https://localhost:5001/api/horseinfoes",
        params
      );
      setSearchHorseInfo(res);
    } catch (e) {
      console.log(e);
    }
  };
  return { searchHorseInfo, setSearchHorseInfo, getSearchHorseInfo };
};
