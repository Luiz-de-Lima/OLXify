import React from "react";
import { FooterArea } from "./styled";
export const Footer = () => {
  return (
    <FooterArea>
      <p>
        Todos os direitos reservados <br /> <span>OlxFy</span>
      </p>
    </FooterArea>
  );
};

//request Get(/user/me(token))
//PUT /user/me (token,name,email,state,password)
//POST /ad/<id>(token,status,title,category,price,priceNegotiable,description,images,img[])
