import { FC } from 'react';

import { SearchBoxProps } from '@/components/SearchBox/types.ts';
import { TYPE } from '@/constants/types.ts';

const SearchBox: FC<SearchBoxProps> = ({ onSearch, onType, onClear, value = '' }) => {
    return (
        <label className="input input-bordered flex items-center">
            <input
                type="text"
                className="grow"
                value={value}
                onChange={(e) => {
                    onSearch(e.target.value);
                    if (e.target.value.length > 0) onType(TYPE.SEARCH);
                }}
                placeholder="Search..."
            />

            {value.length > 0 ? (
                <button onClick={onClear}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                        />
                    </svg>
                </button>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                    />
                </svg>
            )}
        </label>
    );
};

export default SearchBox;
