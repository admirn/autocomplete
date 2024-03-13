import { useEffect, useState } from 'react';
import Autocomplete from '../components/autocomplete'
import '../style/app.css'
import { Character, search } from '../api/fetchData';
import SelectedActor from './selection';

function App() {

    const [value, setValue] = useState<string>('');
    const [options, setOptions] = useState<Character[]>([]);
    const [selectedValue, setSelectedValue] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        search(value, setOptions, setLoading);
    }, [value])


    return (
        <div className='app'>
            <h1>Autocomplete</h1>
            <div className='container'>
                <Autocomplete
                    value={value}
                    setSelectValue={setSelectedValue as React.Dispatch<React.SetStateAction<unknown | null>>}
                    options={options}
                    loading={loading}
                    listLabel={(v: unknown) => (v as Character).name}
                    listValue={(v: unknown) => (v as Character).id}
                    handleChange={setValue} />

                {/** This part is only for showing what is selected **/}
                {selectedValue &&
                    <SelectedActor {...selectedValue} />
                }
            </div>
        </div>
    )
}

export default App
