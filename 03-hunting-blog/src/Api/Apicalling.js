const { default: axios } = require("axios");

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiCallGet(url) {
  // const user = await Util.getUser();
  // let header = {};
  // if (Util.isValidData(user)) {
  //   header.stsid = user.STS_Id;
  // }
  try {
    return axios({
      url: BASE_URL + url,
      method: "GET",

      // headers: header,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          return "ERR_NETWORK";
        } else {
          return error;
        }
      });
  } catch (error) {
    throw error;
  }
}

async function apiCallPost(url, bodyData) {
  try {
    return axios({
      url: BASE_URL + url,
      method: "POST",
      data: bodyData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);

        if (error.code === "ERR_NETWORK") {
          return "ERR_NETWORK";
        } else {
          return error;
        }
      });
  } catch (error) {
    throw error;
  }
}

async function apiCallDelete(url, id) {
  try {
    return axios
      .get({
        url: BASE_URL + url + id,
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);

        if (error.code === "ERR_NETWORK") {
          return "ERR_NETWORK";
        } else {
          return error;
        }
      });
  } catch (error) {
    throw error;
  }
}

const fetchProducts = async (offset = 10, limit = 10) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products`, {
    params: { offset, limit },
  });
  return response.data;
};

export default { apiCallGet, apiCallPost, apiCallDelete, fetchProducts };
