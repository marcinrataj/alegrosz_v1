import * as React from 'react';
import Slider from '@mui/material/Slider';


export default function Range({setCount, count}) {
    return (

            <Slider onChange={(e) => setCount(e.target.value)} 
                    defaultValue={count}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    min={1}
                    max={20}
                    step={5}
            />

    );
}
