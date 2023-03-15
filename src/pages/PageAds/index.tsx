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
  const [adsTotal, setAdsTotal] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const query = useQueryString();
  const [q, setQ] = useState(query.get("q") != null ? query.get("q") : "");
  const [cat, setCat] = useState("");
  const [stateSelect, setStateSelect] = useState(
    query.get("cat") != null ? query.get("cat") : ""
  );

  const [loading, setLoading] = useState(false);

  const getStates = async () => {
    const sList = await useApi.getStates();
    setStateList(sList);
  };
  const getCategories = async () => {
    const cates = await useApi.getCategories();
    setCategories(cates);
  };

  const getAdsList = async () => {
    setLoading(true);
    const json = await useApi.getAds({
      sort: "desc",
      limit: 9,
      q,
      cat,
      stateSelect,
    });
    setAdsList(json.ads);
    setAdsTotal(json.total);
    setResultOpacity(1);
    setLoading(false);
  };

  useEffect(() => {
    if (adsList.length > 0) {
      setPageCount(Math.ceil(adsTotal / adsList.length));
    } else {
      setPageCount(0);
    }
  }, [adsTotal]);
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

  let pagination: Array<number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pagination.push();
  }

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
        {loading && (
          <div className="list-warning">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw3HQSILjyUwLZmDty0VDDEn&ust=1678990774875000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKC-4ZjG3v0CFQAAAAAdAAAAABAD"
              alt="carregando"
            />
          </div>
        )}
        {!loading && adsList.length === 0 && (
          <div className="list-warning">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw3HQSILjyUwLZmDty0VDDEn&ust=1678990774875000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKC-4ZjG3v0CFQAAAAAdAAAAABAD"
              alt="carregando"
            />
          </div>
        )}
        <div className="list" style={{ opacity: `${resultOpacity}` }}>
          {adsList.map((item, index) => (
            <AdItem key={index} data={item} />
          ))}
        </div>

        <div className="pagination">
          {pagination.map((item, index) => (
            <div key={index} className="page-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageArea>
  );
};
