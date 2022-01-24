import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import './resultItem.scss'

const bull = (
    <span
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </span>
);

export default function ResultItem({rate}) {
    return (
        <Card sx={{ minWidth: 200 }} className='mb-10'>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Number: {rate.no}
                </Typography>
                <Typography variant="h5" component="div">
                    Rate: {rate.mid}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Date: {rate.effectiveDate}
                </Typography>
            </CardContent>
        </Card>
    );
}