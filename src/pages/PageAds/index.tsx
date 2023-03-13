import React, { ChangeEvent, useState, useEffect } from "react";
import { PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { Link, useNavigate } from "react-router-dom";
import { typeState } from "../types/typesState";
import { typeCategorie, typeAds } from "../types/typeCategory";
import { AdItem } from "../../components/partials/Aditem";

export const PageAds = () => {
  const [stateList, setStateList] = useState<typeState[]>([]);
  const [categories, setCategories] = useState<typeCategorie[]>([]);
  const [adsList, setAdsList] = useState<typeAds[]>([]);

  const getStates = async () => {
    const sList = await useApi.getStates();
    setStateList(sList);
  };
  const getCategories = async () => {
    const cates = await useApi.getCategories();
    setCategories(cates);
  };
  const getRecentAds = async () => {
    const json = await useApi.getAds({
      sort: "desc",
      limit: 8,
    });
    setAdsList(json.ads);
    console.log(adsList, "ads");
  };
  useEffect(() => {
    getStates();
    getCategories();
    getRecentAds();
  }, []);

  return (
    <PageArea>
      <div className="left-side">
        <form action="" method="get">
          <input type="text" name="q" id="" />
          <div className="filterName">Estado:</div>
          <select name="state" id="">
            <option value=""></option>
            {stateList.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          <div className="filterName">Categoria:</div>
          <ul>
            {categories.map((item, index) => (
              <li key={index} className="category-item">
                {item.img}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </form>
      </div>
      <div className="right-side">...</div>
    </PageArea>
  );
};
