/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from "react";

const useFetch = (apiUrl: any, method: string, userToken?: string) => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (apiUrl) {
      const headers: any = {
        "Content-type": "application/json; charset=UTF-8",
      };
      if (userToken) {
        headers.Authorization = userToken;
      }
      fetch(apiUrl, {
        method,
        // body: JSON.stringify(loginInfo),
        headers,
      })
        .then(async (data) => await data.json())
        .then((dataParsed) => {
          setResult(dataParsed);
        });
    }
  }, [apiUrl]);

  return [result];
};

export default useFetch;
