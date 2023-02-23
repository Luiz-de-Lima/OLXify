import React, { ChangeEvent, FormEvent, useState } from "react";
import { PageArea } from "./styled";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { doLogin } from "../../helpers/AuthHandler";
export const SignIn = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    const json = await useApi.login(input.email, input.password);
    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = "/";
    }
  };
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email" className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input type="email" id="email" disabled={disabled} />
            </div>
          </label>
          <label htmlFor="password" className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input type="password" id="password" disabled={disabled} />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input type="checkbox" disabled={disabled} />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};
