import React, { ChangeEvent, useState } from "react";
import { PageArea } from "./styled";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { doLogin } from "../../helpers/AuthHandler";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setError("");
    const json = await useApi.login(input.email, input.password);
    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);

      navigate("/");
    }
    setDisabled(false);
    setInput({ email: "", password: "" });
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email" className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input
                type="email"
                id="email"
                name="email"
                disabled={disabled}
                value={input.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
          </label>
          <label htmlFor="password" className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                id="password"
                name="password"
                disabled={disabled}
                value={input.password}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
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
