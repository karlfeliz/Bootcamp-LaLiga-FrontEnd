/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from "react";

const useFetch = (apiUrl: any) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then(async (data) => await data.json())
        .then((dataParsed) => { setResult(dataParsed); });
    }
  }, [apiUrl]);

  return [result];
};

export default useFetch;
