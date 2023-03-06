import React, { useState } from "react";
import { PageArea } from "./styled";
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
          <div className="left-side_box">
            <div className="box_adImage">...</div>
            <div className="box_adInfo">
              <div className="box_adInfo--name">...</div>
              <div className="box_adInfo--description">...</div>
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </PageArea>
    </PageContainer>
  );
};
