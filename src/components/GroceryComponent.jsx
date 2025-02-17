import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

const GroceryComponent = () => {
    const [item, setItem] = useState("");
    const [groceryItems, setGroceryItems] = useState([]);

    const handleAddItem = () => {
        setGroceryItems([...groceryItems, {id: uuid(), name: item}]);
    }

    return (
        <div className='grocery-buddy'>
            <h1>Grocery Buddy</h1>
            <div className='input-section'>
                <div className='input-container'>
                    <input type="text" onChange={(event) => setItem(event.target.value)} 
                        placeholder='Enter an item...' value={item}/>
                    <button className="btn-add" onClick={handleAddItem}>Add Item</button>
                </div>
            </div>
            <ul className='grocery-list'>
                {groceryItems.map((item))}
            </ul>
        </div>
    )
}

export default GroceryComponent