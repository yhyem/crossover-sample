import { Axios } from "./Axios";

export const AxiosPostDelete = async (id, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  const token = localStorage.getItem("token");

  await Axios.delete(`/api/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      alert("게시물이 삭제되었습니다");
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
