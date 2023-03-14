import React, { ChangeEvent, useState, useEffect } from "react";
import { PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { useLocation, useNavigate } from "react-router-dom";
import { typeState } from "../types/typesState";
import { typeCategorie, typeAds } from "../types/typeCategory";
import { AdItem } from "../../components/partials/Aditem";
let timer: number | undefined;

export const PageAds = () => {
  const navigate = useNavigate();
  const [stateList, setStateList] = useState<typeState[]>([]);
  const [categories, setCategories] = useState<typeCategorie[]>([]);

  const [adsList, setAdsList] = useState<typeAds[]>([]);

  const [resultOpacity, setResultOpacity] = useState(1);
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQueryString();

  const [q, setQ] = useState(query.get("q") != null ? query.get("q") : "");
  const [cat, setCat] = useState("");
  const [stateSelect, setStateSelect] = useState(
    query.get("cat") != null ? query.get("cat") : ""
  );

  const getStates = async () => {
    const sList = await useApi.getStates();
    setStateList(sList);
  };
  const getCategories = async () => {
    const cates = await useApi.getCategories();
    setCategories(cates);
  };

  const getAdsList = async () => {
    const json = await useApi.getAds({
      sort: "desc",
      limit: 9,
      q,
      cat,
      stateSelect,
    });
    setAdsList(json.ads);
    setResultOpacity(1);
  };
  useEffect(() => {
    getStates();
    getCategories();
  }, []);

  useEffect(() => {
    let queryString = [];
    if (q) {
      queryString.push(`q=${q}`);
    } else if (cat) {
      queryString.push(`cat=${cat}`);
    } else if (stateSelect) {
      queryString.push(`state=${stateSelect}`);
    }
    navigate({
      search: `?${queryString.join("&")}`,
    });
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(getAdsList, 2000);
    getAdsList();
    setResultOpacity(0.3);
  }, [q, cat, stateSelect]);

  return (
    <PageArea>
      <div className="left-side">
        <form action="" method="get">
          <input
            type="text"
            name="q"
            id=""
            placeholder="o que você procura?"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <div className="filterName">Estado:</div>
          <select
            name="state"
            id=""
            value={stateSelect}
            onChange={(e) => setStateSelect(e.target.value)}
          >
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
              <li
                key={index}
                className={
                  cat === item.slug ? "category-item active" : "category-item"
                }
                onClick={() => setCat(item.slug)}
              >
                {item.img}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </form>
      </div>
      <div className="right-side">
        <h2>Resultados</h2>
        <div className="list" style={{ opacity: `${resultOpacity}` }}>
          {adsList.map((item, index) => (
            <AdItem key={index} data={item} />
          ))}
        </div>
      </div>
    </PageArea>
  );
};
