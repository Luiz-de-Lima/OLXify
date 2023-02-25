import React, { ChangeEvent, useState, useEffect } from "react";
import { PageArea } from "./styled";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";
import { doLogin } from "../../helpers/AuthHandler";
import { typeState } from "../types/typesState";

export const SignUp = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    nome: "",
    confirmPassword: "",
    estado: "",
  });

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [stateList, setStateList] = useState<typeState[]>();
  const [stateLoc, setStateLoc] = useState("");
  const handleChange = (e: any) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handleChangeStates = (e: ChangeEvent<HTMLSelectElement>) => {
    setStateLoc(e.target.value);
  };
  const getStates = async () => {
    const sList = await useApi.getStates();
    setStateList(sList);
  };
  useEffect(() => {
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
    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="nome" className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input
                type="text"
                name="nome"
                disabled={disabled}
                value={register.nome}
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
                value={stateLoc}
                onChange={handleChangeStates}
                required
              >
                <option></option>
                {stateList &&
                  stateList.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </label>
          <label htmlFor="email" className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input
                type="email"
                name="email"
                disabled={disabled}
                value={register.email}
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
                value={register.password}
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
                value={register.confirmPassword}
                name="confirmPassword"
                disabled={disabled}
                onChange={handleChange}
              />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Cadastrar</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};
