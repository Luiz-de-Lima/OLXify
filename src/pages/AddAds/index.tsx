import React, { ChangeEvent, useRef, useState } from "react";
import { useApi } from "../../helpers/OlxifyApi";
import { doLogin } from "../../helpers/AuthHandler";
import { useNavigate } from "react-router-dom";
import { PageArea } from "./styled";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";

export const AddAds = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [description, setDescription] = useState("");
  const fileField = useRef();
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setError("");
    // const json = await useApi.login(input.email, input.password);
    // if (json.error) {
    //   setError(json.error);
    // } else {
    //   doLogin(json.token, rememberPassword);

    //   navigate("/");
    // }
    // setDisabled(false);
    // setInput({ email: "", password: "" });
  };

  return (
    <PageContainer>
      <PageTitle>Postar um anuncio </PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email" className="area">
            <div className="area--title">Titulo</div>
            <div className="area--input">
              <input
                type="email"
                id="email"
                name="email"
                disabled={disabled}
                value={title}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
          </label>
          <label htmlFor="password" className="area">
            <div className="area--title">Categoria</div>
            <div className="area--input">
              <select name="" id=""></select>
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Preço</div>
            <div className="area--input">...</div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Preço Negociável</div>
            <div className="area--input">
              <input
                type="checkbox"
                name=""
                id=""
                disabled={disabled}
                checked={priceNegotiable}
                onChange={(e) => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Descrição</div>
            <div className="area--input">
              <textarea
                disabled={disabled}
                value={description}
                name=""
                id=""
                cols={10}
                rows={10}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Imagem(s)</div>
            <div className="area--input">
              <input
                type="file"
                name=""
                id=""
                multiple
                disabled={disabled}
                ref={fileField}
              />
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Adicionar Anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};
