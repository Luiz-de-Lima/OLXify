import React, { useEffect, useState } from "react";
import { useApi } from "../../helpers/OlxifyApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdInfoType } from "../types/typeCategory";
import { Slide } from "react-slideshow-image";
import { PageArea, Fake, OtherArea, BreadCrumb } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { AdItem } from "../../components/partials/Aditem";

export const AdPage = () => {
  const navigate = useNavigate();
  const api = useApi;

  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState<AdInfoType>();

  const getAdInfo = async (id: any) => {
    const json = await api.getAd(id, true);
    if (json) {
      setAdInfo(json);
      console.log(adInfo);
      setLoading(false);
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    getAdInfo(id);
  }, []);

  const formateDate = (dateCreated: string) => {
    let cDate = new Date(dateCreated);
    let months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    let cDay = cDate.getDate();
    let cMonth = cDate.getMonth();
    let cYear = cDate.getFullYear();

    return `${cDay} de ${months[cMonth]} de ${cYear}`;
  };

  return (
    <PageContainer>
      <BreadCrumb>
        <span>Você está aqui </span>
        <Link to="/">Home</Link> /{" "}
        <Link to={`/ads?state=${adInfo?.stateName}`}>{adInfo?.stateName}</Link>/
        <Link
          to={`/ads?state=${adInfo?.stateName}&cat=${adInfo?.category.slug}`}
        >
          {adInfo?.category.name}
        </Link>{" "}
        / {adInfo?.title} /
      </BreadCrumb>
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="box_adImage">
              {loading && <Fake height={300} />}
              {adInfo?.images && (
                // arrumar o slide
                <Slide cssClass="slides">
                  {adInfo.images.map((img, index) => (
                    <div className="each-slide" key={index}>
                      <img src={img} alt="" />
                    </div>
                  ))}
                </Slide>
              )}
            </div>
            <div className="box_adInfo">
              <div className="box_adInfo--name">
                {loading && <Fake height={20} />}
                {adInfo?.title && <h2>{adInfo.title}</h2>}
                {adInfo?.dateCreated && (
                  <small>Criado em: {formateDate(adInfo.dateCreated)}</small>
                )}
              </div>
              <div className="box_adInfo--description">
                {loading && <Fake height={100} />}
                {adInfo?.description}

                <hr />
                {adInfo?.views && <small>Visualizações:{adInfo.views}</small>}
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box box--padding">
            {loading && <Fake height={20} />}
            {adInfo?.priceNegotiable && "Preço Negociável"}
            {!adInfo?.priceNegotiable && adInfo?.price && (
              <div className="price">
                Preço: <span>R$ {adInfo.price.toFixed(2)}</span>
              </div>
            )}
          </div>
          {loading && <Fake height={50} />}

          {adInfo?.userInfo.email && adInfo.userInfo.email && (
            <>
              <a
                href={`mailto:${adInfo.userInfo.email}`}
                target="_blank"
                className="contact-sellerLink"
              >
                Falar com o anunciante
              </a>
              <div className="createdBy box box--padding">
                Criado Por:
                <strong>{adInfo.userInfo.name}</strong>
                <small>E-mail: {adInfo.userInfo.email}</small>
                <small>Estado:{adInfo.stateName}</small>
              </div>
            </>
          )}
        </div>
      </PageArea>
      <OtherArea>
        {adInfo?.others && (
          <>
            <h2>Outras ofertas do anunciante</h2>
            <div className="list">
              {adInfo.others.map((item, index) => (
                <AdItem key={index} data={item} />
              ))}
            </div>
          </>
        )}
      </OtherArea>
    </PageContainer>
  );
};
