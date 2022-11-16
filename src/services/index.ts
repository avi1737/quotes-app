import axios from "axios";
import { Quote } from "../components/Category/Category";

const client = axios.create({
  baseURL: "https://qodapi.azurewebsites.net/api/",
});

const API = {
  getAllCategories: async (URL: string) => {
    try {
      const { data } = await client.get(URL);
      return data;
    } catch (e) {
      return e;
    }
  },
  getQuoteByCategory: async (URL: string): Promise<Quote | any> => {
    try {
      const { data } = await client.get(URL);
      return data;
    } catch (e) {
      return e;
    }
  },
};

export default API;
