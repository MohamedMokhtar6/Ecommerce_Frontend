import baseUrl from "../Api/baseURL";

const useUpdateData = async (url, parmas) => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   };
  const res = await baseUrl.put(url, parmas);
  //   console.log(res.status);
  return res;
};

export default useUpdateData;
