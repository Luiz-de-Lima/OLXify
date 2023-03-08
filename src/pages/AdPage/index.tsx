import React, { useEffect, useState } from "react";
import { useApi } from "../../helpers/OlxifyApi";
import { useNavigate, useParams } from "react-router-dom";
import { AdInfoType } from "../types/typeCategory";
import { Slide } from "react-slideshow-image";
import { PageArea, Fake } from "./styled";
import { PageContainer } from "../../components/MainComponents";

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
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="box_adImage">
              {loading && <Fake height={300} />}
              {adInfo?.images && (
                <Slide>
                  {adInfo?.images.map((img, index) => (
                    <div className="each-slide" key={index}>
                      <img src={img} alt="teste" />
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
          </div>
          <div className="box box--padding">
            {loading && <Fake height={50} />}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};
