import React, { ChangeEvent, useState, useEffect } from "react";
import { PageArea } from "./styled";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { doLogin } from "../../helpers/AuthHandler";

export const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    nome: "",
    estado: "",
  });

  const [disabled, setDisabled] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [stateList, setStateList] = useState([]);
  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const getStates = async () => {
      const sList = await useApi.getStates();
      setStateList(sList);
    };
    getStates();
  }, []);
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);

    //   const json = await useApi.login(input.email, input.password);
    //   if (json.error) {
    //     setError(json.error);
    //   } else {
    //     doLogin(json.token, confirmPassword);
    //     window.location.href = "/";
    //   }
    //   setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email" className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input
                type="text"
                id="email"
                name="nome"
                disabled={disabled}
                value={input.nome}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <label htmlFor="email" className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select
                disabled={disabled}
                value={input.estado}
                onChange={handleChange}
                required
              >
                {stateList.map((item: string, index: number) => (
                  <>
                    <option key={index} value={item}>
                      {item}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </label>
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
            <div className="area--title">Confirmar Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
