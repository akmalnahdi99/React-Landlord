import { config } from "./../constants";
export const GetUserInfo = async (accessToken) => {
  console.log("[function getUserInfo]");
  var { apiUrl } = config;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    //body: JSON.stringify({ title: "React POST Request Example" }),
  };
  console.log("[get user info] 2");
  var userInfo = null;
  await fetch(apiUrl + "users/info", requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        userInfo = await resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then((users) => {})
    .catch((error) => console.log("[Exception]" + error));

  return userInfo;
};
