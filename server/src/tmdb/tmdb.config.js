const baseUrl = "https://www.themoviedb.org/";
const key =  "1fed5640c1c1c570b54a91b296078ae9";

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };