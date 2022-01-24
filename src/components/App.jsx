import React, {useState} from 'react';
import "../index.scss";
import FilterForm from "./FilterForm/FilterForm";
import Results from "./Results/Results";

function App() {
    const [currencyCode, setCurrencyCode] = useState('eur');
    const [count, setCount] = useState(5);

    return (
        <div>
            <FilterForm setCurrencyCode={setCurrencyCode} setCount={setCount} count={count}/>
            <Results currencyCode={currencyCode} count={count}/>
        </div>
    );
}

export default App;