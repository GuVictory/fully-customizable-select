import React from 'react';
import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';

export type SelectInputProps = {
    value: string;
    onClick: () => void;
    open?: boolean;
};

const SelectInput = React.forwardRef<HTMLDivElement | null, SelectInputProps>(({ onClick, value, open }, ref) => {
    return (
        <div ref={ref} onClick={onClick} className='select-input'>
            <div className='select-selected-value'>{value}</div>
            <div className='select-tools'>
                <div className='select-tool'>{open ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
            </div>
        </div>
    );
});

SelectInput.displayName = 'SelectInput';

export default SelectInput;
