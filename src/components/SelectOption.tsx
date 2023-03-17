import React from 'react';

export type SelectOptionProps<T> = {
    groupLabel?: boolean;
    value: T;
    label: string;
    isSelected?: boolean;
    onClick?: (value: T) => void;
};

const SelectOption = <T,>({ groupLabel, value, label, onClick, isSelected }: SelectOptionProps<T>) => {
    const handleClick = () => {
        onClick?.(value);
    };

    return (
        <>
            {groupLabel ? (
                <div className='select-group'>{label}</div>
            ) : (
                <div onClick={handleClick} className={`select-item ${isSelected && 'selected'}`}>
                    {label}
                </div>
            )}
        </>
    );
};

export default SelectOption;
