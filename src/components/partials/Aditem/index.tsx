import React from "react";
import { Link } from "react-router-dom";
import { typeAds } from "../../../pages/types/typeCategory";
import { Item } from "./styled";
type AdItemProps = {
  data: typeAds;
};
export const AdItem = ({ data }: AdItemProps) => {
  let price = "";
  if (data.priceNegotiable) {
    price = "Preço Negociavel";
  } else {
    price = `R$ ${data.price}`;
  }
  return (
    <Item className="adItem">
      <Link to={`/ads/${data.id}`}>
        <div className="itemImage">
          <img src={data.image} alt="image" />
        </div>
        <div className="itemName">
          <span>{data.title}</span>
        </div>
        <div className="itemPrice"></div>
      </Link>
    </Item>
  );
};
