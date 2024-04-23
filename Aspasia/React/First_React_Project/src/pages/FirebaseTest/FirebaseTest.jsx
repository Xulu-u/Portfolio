import { useEffect, useState } from "react";
import {createItem, getItems, deleteItem} from '../../app/services/items';


const FirebaseTest= () => {
    const [userName, setUserName] = useState();
    const [items, setItems] = useState([]);
    const [id, setID] = useState();

    const consultItems = () => {getItems().then(setItems);}

    //This would be the same but using async/await (then ans async/await do the same thing)
    //const consultItem = async () => {const i = await getItems(); setItems(i);}

    useEffect(() => {
        consultItems();
    }, []);

    return (
        <div>
            <h1>Firebase Test</h1>
            <h2>Input your username and press save to store it in the database</h2>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={()=> {createItem({userName}); consultItems(); }}>Save</button>

            <h2>Input an ID and press delete to remove it in the database</h2>
            <input type="text" onChange={(e) => setID(e.target.value)} />
            <button onClick={()=> {deleteItem(id); consultItems(); }}>Delete</button>

            <h2>List of users saved in the database</h2>
            {
                items.map(item => (
                    <p key={item.id}>
                        Username: {item.userName} 
                        <br /> 
                        ID: {item.id}
                        </p>
                    ))
            }
        </div>
    )
};

export default FirebaseTest;