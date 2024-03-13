import { Suspense, forwardRef } from 'react';
import Highlight from '../utils/highlight';

interface OptionsContainerProps<T = any> {
    options: T[];
    value: string;
    listLabel: (value: T) => string;
    listValue: (value: T) => number;
    handleSelect: (value: T) => void;
}

const OptionsContainer = forwardRef<HTMLDivElement, OptionsContainerProps>(({ options, value, listLabel, listValue, handleSelect }, ref) => {

    return (
        <div className="optionsContainer" ref={ref}>
            {
                options?.length > 0 ?
                    options.map((item, index) => {
                        const label = listLabel(item);
                        return (
                            <div
                                id={listValue(item).toString()}
                                onClick={() => handleSelect(item)}
                                className="option"
                                tabIndex={0}
                                key={index}
                            >
                                <Suspense fallback={<div>Loading...</div>}>
                                    {value ? <Highlight label={label} value={value} /> : label}
                                </Suspense>
                            </div>
                        )
                    }) :
                    (<div>No options</div>)
            }
        </div>
    );
});

export default OptionsContainer;