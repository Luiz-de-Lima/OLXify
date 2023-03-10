export type typeCategorie = {
  name: string;
  id: number;
  slug: string;
  img: string;
};

export type typeAds = {
  title: string;
  price: number;
  image: string;
  id: string;
};

export type AdInfoType = {
  title: string;
  dateCreated: string;
  description: string;
  views: string;
  images: string[];
  priceNegotiable: boolean;
  price: number;
  userInfo: { name: string; email: string };
  stateName:string
};
