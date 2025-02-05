import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const apiKey = "aeb92e0afba520a08af73b21";

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency.toUpperCase()}`)
            .then((response) => response.json())
            .then((res) => {
                if (res.conversion_rates) {
                    setData(res.conversion_rates);
                } else {
                    console.error("Invalid API response:", res);
                }
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
