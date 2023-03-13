import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useApi } from "../../helpers/OlxifyApi";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { useNavigate } from "react-router-dom";
import { PageArea } from "./styled";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";

export const AddAds = () => {
  const [listcategories, setListCategories] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [description, setDescription] = useState("");
  const fileField = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const cats = await useApi.getCategories();
      setListCategories(cats);
      console.log(listcategories);
    };

    getCategories();
  }, []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setError("");
    let errors: Array<string> = [];
    if (title.trim()) {
      errors.push("sem titulo");
    } else if (!category) {
      errors.push("Sem categoria");
    } else if (errors.length === 0) {
      const fData = new FormData();
      fData.append("title", title);
      fData.append("price", price);
      fData.append("priceneg", priceNegotiable);
      fData.append("desc", description);
      fData.append("cat", category);

      if (fileField.current?.files.length > 0) {
        for (let i = 0; i < fileField.current?.files.length; i++) {
          fData.append("img", fileField.current?.files[i]);
        }
      }
      const json = await useApi.AddAds(fData);
      if (!json.error) {
        navigate(`/ad/${json.id}`);
        return;
      } else {
        setError(json.error);
      }
    } else {
      setError(errors.join("\n"));
    }
    setDisabled(false);
  };

  const priceMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });
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
              <select
                name=""
                id=""
                disabled={disabled}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value=""></option>
                {listcategories &&
                  listcategories.map((item) => (
                    <option key={item_id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </label>
          <label htmlFor="" className="area">
            <div className="area--title">Preço</div>
            <div className="area--input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$"
                disabled={disabled || priceNegotiable}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
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
                onChange={() => setPriceNegotiable(!priceNegotiable)}
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
