import { Axios } from "./Axios";

export const AxiosPosts = async (page, callbackFunctions) => {
  const { getDataSuccess, setPageNumber } = callbackFunctions;
  const token = localStorage.getItem("token");

  await Axios.get(`/api/posts?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      getDataSuccess(res.data);
      setPageNumber();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
