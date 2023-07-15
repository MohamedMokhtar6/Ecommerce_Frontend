import baseUrl from "../Api/baseURL";

const useInsertData = async (url, parmas) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   };
  const res = await baseUrl.post(url, parmas);
  return res;
};

export { useInsertData };
