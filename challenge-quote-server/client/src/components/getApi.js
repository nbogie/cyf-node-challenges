import axios from "axios";

export const getQuotes = () => {
  return axios.get("/quotes").then(res => {
    console.log(res.data);

    return res.data;
  });
};
export const getQuotesRandom = () => {
  return axios.get("http://localhost:3200/quotes/random").then(res => {
    console.log(res.data);

    return res.data;
  });
};
export const postQuotesSearch = data => {
  console.log(data);

  return axios.post(`http://localhost:3200/quotes/search/${data}`).then(res => {
    console.log(res.data);

    // return res.data;
  });
};
// export const getQuotesSeacrh = () => {
//   return axios.get("/quotes/search").then(res => {
//     console.log(res.data);

//     return res.data;
//   });
// };

export async function getQuotesSeacrh() {
  try {
    const response = await axios.get("http://localhost:3200/quotes/search");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
