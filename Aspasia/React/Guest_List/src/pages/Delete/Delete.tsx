import {useEffect, useState} from 'react';
import {getItems, deleteItem} from '../../app/services/itemsApi';
import { Item } from '../../common/types/Items';


const Delete = () => {
        const [id, setID] = useState<string>('');
        const [items, setItems] = useState<Item[]>([]);

        //const consultItems = () => {getItems().then(setItems);}
        const consultItems = () => getItems().then((data) => setItems(data as Item[]));

        //This would be the same but using async/await (then ans async/await do the same thing)
        //const consultItem = async () => {const i = await getItems(); setItems(i);}

        useEffect(() => {
                consultItems();
        }, []);

        return(
                <div>    
                        <h1>Delete</h1>
                        <h2>Input an ID and press delete to remove it in the database</h2>
                        <input type="text" onChange={(e) => setID(e.target.value)} value={id}/>
                        <button onClick={()=> {deleteItem(id); setID(''); consultItems(); }}>Delete</button>

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
}

export default Delete;