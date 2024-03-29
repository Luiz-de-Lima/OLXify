import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://alunos.b7web.com.br:501";

const apiFetchFile = async (endpoint: string, body: any) => {
  if (body.token) {
    let token = Cookies.get("token");

    if (token) {
      body.append("token", token);
    }
  }
  const response = await fetch(`${BASEAPI}${endpoint}`, {
    method: "POST",
    body,
  });
  const json = await response.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }
  return json;
};

const apiFetchPost = async (endpoint: string, body: any) => {
  if (body.token) {
    let token = Cookies.get("token");

    if (token) {
      body.token = token;
    }
  }
  const response = await fetch(`${BASEAPI}${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }
  return json;
};

const apiFetchGet = async (endpoint: string, body?: any) => {
  if (!body) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }
  const response = await fetch(`${BASEAPI}${endpoint}?${qs.stringify(body)}`);
  const json = await response.json();
  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }
  return json;
};
export const useApi = {
  login: async (email: string, password: string) => {
    const json = await apiFetchPost("/user/signin", { email, password });
    return json;
  },
  registerData: async (
    name: string,
    email: string,
    password: string,
    stateLoc: string
  ) => {
    const json = await apiFetchPost("/user/signup", {
      name,
      email,
      password,
      state: stateLoc,
    });

    return json;
  },

  getStates: async () => {
    const json = await apiFetchGet("/states");
    return json.states;
  },
  getCategories: async () => {
    const json = await apiFetchGet("/categories");
    return json.categories;
  },
  getAds: async (options: {
    sort: string;
    limit: number;
    q?: any;
    cat?: any;
    stateSelect?: any;
  }) => {
    const json = await apiFetchGet("/ad/list", options);
    return json;
  },
  getAd: async (id: any, other: boolean = false) => {
    const json = await apiFetchGet("/ad/item", { id, other });
    return json;
  },
  AddAds: async (fData: string) => {
    const json = await apiFetchFile("/ad/add", fData);
    return json;
  },
};
