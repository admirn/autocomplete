
import { FC } from 'react';
import closeIcon from '../assets/x_icon.svg';
import loadingIcon from '../assets/loading.gif';

interface SearchInputProps {
    value: string;
    loading: boolean;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setShowDropdown: (show: boolean) => void;
    handleClose: () => void;
}

const SearchInput: FC<SearchInputProps> = ({ value, loading, handleInputChange, setShowDropdown, handleClose }) => {
    return (
        <div style={{ position: 'relative' }}>
            <input
                type="text"
                placeholder="Start typing..."
                value={value}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                style={{ paddingRight: '30px' }}
            />
            {value && <div className="closeIcon">
                <img onClick={handleClose} src={closeIcon} style={{ width: 15 }} alt="close" />
            </div>}
            {loading && <img className='loader' src={loadingIcon} width={20} alt='loading' />}
        </div>
    );
}

export default SearchInput;