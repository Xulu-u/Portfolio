import { useState } from 'react';
import {createItem} from '../../app/services/itemsApi';

const Create = () => {
        const [userName, setUserName] = useState<string>('');

        return(
                <div>    
                        <h1>Create</h1>
                <h2>Input your username and press save to store it in the database</h2>
                <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName}/>
                <button onClick={()=> {createItem({userName}); setUserName('');}}>Save</button>    
                </div>
        )
}

export default Create;