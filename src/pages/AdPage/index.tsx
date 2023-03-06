import React, { useState } from "react";
import { PageArea, Fake } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import { useApi } from "../../helpers/OlxifyApi";

import { useNavigate, useParams } from "react-router-dom";

export const AdPage = () => {
  const navigate = useNavigate();
  const api = useApi;

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState([]);

  return (
    <PageContainer>
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="box_adImage">
              {loading && <Fake height={300} />}
            </div>
            <div className="box_adInfo">
              <div className="box_adInfo--name">
                {loading && <Fake height={20} />}
              </div>
              <div className="box_adInfo--description">
                {loading && <Fake height={100} />}
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
