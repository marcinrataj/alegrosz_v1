import * as React from 'react';
import TextField from '@mui/material/TextField';
import Range from '../Range/Range'

export default function FilterForm({setCurrencyCode, setCount, count}) {
    return (
        <form
            noValidate
            autoComplete="off"
        >


            <TextField id="currency-code"
                       onChange={(e) => setCurrencyCode(e.target.value)}
                       label="Currency code"
                       variant="standard" />

            <Range setCount={setCount} count={count}/>
        </form>
    );
}
