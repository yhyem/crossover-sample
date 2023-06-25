import { Axios } from "./Axios";

export const AxiosPosts = async (callbackFunctions) => {
  const { getDataSuccess } = callbackFunctions;
  const token = localStorage.getItem("token");

  await Axios.get(`/api/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      getDataSuccess(res.data);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
