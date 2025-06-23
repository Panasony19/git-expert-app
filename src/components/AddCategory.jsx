import { useState } from 'react';

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>           
            <input
            type="text"
            placeholder="Add a new category"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    )
}

export default AddCategory