import React, { ChangeEvent, useState, useEffect } from "react";
import { SearchArea, PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { Link, useNavigate } from "react-router-dom";
import { typeState } from "../types/typesState";
import { typeCategorie, typeAds } from "../types/typeCategory";
import { AdItem } from "../../components/partials/Aditem";

export const Home = () => {
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
    console.table(adsList);
  };
  useEffect(() => {
    getStates();
    getCategories();
    getRecentAds();
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
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className="list-ads">
            {adsList &&
              adsList.map((item, index) => (
                <>
                  <AdItem key={index} data={item} />
                </>
              ))}
          </div>
          <Link to={"/ads"} className="see-allLink">
            Ver Todos
          </Link>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eaque, maiores cumque in, repellat dolores dolorum molestiae totam
            aliquid error et ab laudantium assumenda nostrum magnam asperiores
            sed labore aliquam?
          </p>
        </PageArea>
      </PageContainer>
    </>
  );
};
