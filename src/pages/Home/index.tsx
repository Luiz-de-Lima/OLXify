import React, { ChangeEvent, useState } from "react";
import { SearchArea, PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { doLogin } from "../../helpers/AuthHandler";
import { useNavigate } from "react-router-dom";

export const Home = () => {
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
                placeholder="o que você procura"
              />
              <select name="state" id=""></select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="category-list"></div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
};
