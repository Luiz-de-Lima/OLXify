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
  priceNegotiable: boolean;
};

export type AdInfoType = {
  title: string;
  dateCreated: string;
  description: string;
  views: string;
  images: string[];
};
