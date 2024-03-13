import { FC } from "react";
import { Character } from "../api/fetchData";

const SelectedActor: FC<Character> = ({ name, id, image }) => {
    return (
        <>
            <h2>Selected Actor</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ width: 50 }}>ID</p>
                <p>Name</p>
                <p style={{ textAlign: 'center', width: 80 }}>Image</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ width: 50 }}>{id}</p>
                <p>{name}</p>
                <img src={image} alt={name} width={80} />
            </div>
        </>
    );
}

export default SelectedActor;