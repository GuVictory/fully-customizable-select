import React from 'react';
import ReactDOM from 'react-dom/client';
import { Select } from 'fully-customizable-select';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const options = [
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green', groupLabel: true },
    {
        value: 'orange',
        label: 'Orange',
        onClick: (val: string) => {
            // Will not call the internal logic of clicking on the select element, only the passed callback
            console.log(val);
        },
    },
    { value: 'pink', label: 'pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
];

root.render(
    <React.StrictMode>
        <Select placeHolder={'ssss'} options={options} />
    </React.StrictMode>,
);
