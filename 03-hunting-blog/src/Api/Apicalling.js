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
  // const user = await Util.getUser();
  let header = {};
  // if (Util.isValidData(user)) {
  //   header.stsid = user.STS_Id;
  // }

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

export default { apiCallGet, apiCallPost };
