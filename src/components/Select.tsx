import React, { useState, useRef, useEffect } from 'react';
import SelectInput, { SelectInputProps } from './SelectInput';
import SelectOption, { SelectOptionProps } from './SelectOption';

import './Select.css';

export type TOption<T> = {
    groupLabel?: boolean;
    value: T;
    label: string;
    onClick?: (value: T) => void;
};

export type SelectProps<T> = {
    customInput?: React.FC<SelectInputProps & { ref: React.Ref<HTMLDivElement | null> }>;
    placeHolder?: string;
    options?: {
        groupLabel?: boolean;
        value: T;
        label: string;
        onClick?: (value: T) => void;
        customOption?: React.FC<SelectOptionProps<T>>;
    }[];
    onChange?: (value: T) => void;

    className?: string;
    optionsClassName?: string;
    selectedValue?: TOption<T>;
};

const Select = <T,>({
    customInput: CustomInput,
    placeHolder,
    options,
    onChange,
    className,
    optionsClassName,
    selectedValue: inilialSelectedValue,
}: SelectProps<T>): JSX.Element => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState<TOption<T> | undefined>(inilialSelectedValue);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        setSelectedValue(inilialSelectedValue);
    }, [inilialSelectedValue]);

    useEffect(() => {
        const handler = (e: any) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    }, []);

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue) {
            return placeHolder ?? 'Select';
        }
        return selectedValue.label;
    };

    const onItemClick = (option: TOption<T>) => {
        if (option.onClick) {
            option.onClick?.(option.value);
        } else {
            setSelectedValue(option);
            onChange?.(option.value);
        }
    };

    const isSelected = (option: TOption<T>) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    return (
        <div className={`${className} select-container`}>
            {CustomInput ? (
                <CustomInput ref={inputRef} open={showMenu} value={getDisplay()} onClick={handleInputClick} />
            ) : (
                <SelectInput ref={inputRef} open={showMenu} value={getDisplay()} onClick={handleInputClick} />
            )}
            {showMenu && (
                <div className={`${optionsClassName} select-menu`}>
                    {options?.map((option) => (
                        <>
                            {option.customOption ? (
                                <option.customOption
                                    key={String(option.value)}
                                    onClick={() => onItemClick(option)}
                                    isSelected={isSelected(option)}
                                    {...option}
                                />
                            ) : (
                                <SelectOption
                                    key={String(option.value)}
                                    onClick={() => onItemClick(option)}
                                    isSelected={isSelected(option)}
                                    {...option}
                                />
                            )}
                        </>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
