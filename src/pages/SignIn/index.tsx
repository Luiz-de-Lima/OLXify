import React from "react";
import { PageArea } from "./styled";
import { PageContainer, PageTitle } from "../../components/MainComponents";
export const SignIn = () => {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form action="">
          <label htmlFor="email" className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input type="email" />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input type="password" />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input type="checkbox" />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button>Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};
