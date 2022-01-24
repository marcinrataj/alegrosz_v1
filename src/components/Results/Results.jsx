import React, {useEffect, useState} from 'react';
import ResultItem from "./ResultItem";

function Results({currencyCode, count}) {
    const [rates, setRates] = useState([]);
    const [currencyName, setCurrencyName] = useState("");

    useEffect(() => {
        getData().catch(e => {
        });
    }, [currencyCode, count]);

    const getData = async () => {
        if (currencyCode.length >= 3) {
            const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/last/${count}?format=json`);
            const data = await response.json();

            setRates(data.rates);
            setCurrencyName(data.currency);
        }
    }

    // const getData = () => {
    //     fetch(`http://api.nbp.pl/api/exchangerates/rates/a/usd/last/15?format=json`)
    //         .then(response => response.json())
    //         .then(data => setRates(data.rates));
    // }

    return (
        <div>

            {!rates.length ? (
                <h2>Fetching data</h2>
            ) : (
                <>
                    <h3>{currencyName}</h3>
                    {rates.map(rate => <ResultItem key={rate.no} rate={rate}/>)}
                </>
            )}
        < /div>

    )
}

export default Results;