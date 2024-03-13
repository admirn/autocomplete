import { FC, useEffect, useRef, useState } from "react";
import "../style/autocomplete.css";
import SearchInput from "./searchInput";
import OptionsContainer from "./optionsContainer";


interface AutocompleteProps<T> {
    options: T[];
    value: string;
    handleChange: (value: string) => void;
    listLabel: (value: T) => string;
    listValue: (value: T) => number;
    setSelectValue: React.Dispatch<React.SetStateAction<unknown | null>>;
    loading: boolean;
}

export const Autocomplete: FC<AutocompleteProps<unknown>> = ({
    options, value, handleChange, listLabel, listValue, setSelectValue, loading }) => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event.target.value);
        setShowDropdown(true);
    };

    const handleSelect = (item: unknown) => {
        handleChange(listLabel(item));
        setSelectValue(item)
        setShowDropdown(false);
    }


    const handleClose = () => {
        handleChange('');
        setShowDropdown(false);
        setSelectValue(null);
    }


    return (
        <>
            <SearchInput
                value={value}
                loading={loading}
                handleInputChange={handleInputChange}
                setShowDropdown={setShowDropdown}
                handleClose={handleClose}
            />

            {showDropdown &&
                <OptionsContainer
                    options={options}
                    value={value}
                    listLabel={listLabel}
                    listValue={listValue}
                    handleSelect={handleSelect}
                    ref={ref}
                />
            }
        </>

    );
}

export default Autocomplete;