type HighlightProps = {
    label: string;
    value: string;
};

const Highlight: React.FC<HighlightProps> = ({ label, value }) => {
    const index = label.toLowerCase().indexOf(value.toLowerCase());
    const beforeMatch = label.slice(0, index);
    const match = label.slice(index, index + value.length);
    const afterMatch = label.slice(index + value.length);


    return (
        <span>
            {beforeMatch}
            <span style={{ backgroundColor: index >= 0 ? 'yellow' : 'transparent' }}>
                {match}
            </span>
            {afterMatch}
        </span>
    );
};

export default Highlight;