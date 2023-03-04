import React, { ChangeEvent, useState, useEffect } from "react";
import { SearchArea, PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { Link, useNavigate } from "react-router-dom";
import { typeState } from "../types/typesState";
import { typeCategorie } from "../types/typeCategory";

export const Home = () => {
  const [stateList, setStateList] = useState<typeState[]>([]);
  const [categories, setCategories] = useState<typeCategorie[]>([]);

  const getStates = async () => {
    const sList = await useApi.getStates();
    setStateList(sList);
  };
  const getCategories = async () => {
    const cates = await useApi.getCategories();
    setCategories(cates);
    console.table(cates);
  };
  useEffect(() => {
    getStates();
    getCategories();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="search-box">
            <form action="/ads" method="get">
              <input
                type="text"
                name="q"
                id=""
                placeholder="o que você procura?"
              />
              <select name="state" id="">
                {stateList &&
                  stateList.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="category-list">
            {categories &&
              categories.map((item, index) => (
                <>
                  <Link
                    to={`/ads?cat=${item.slug}`}
                    className="category-item"
                    key={index}
                  >
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </Link>
                </>
              ))}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};
