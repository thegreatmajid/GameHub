import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "504d77996cc7411d87e312fe0239f450",
  },
});
