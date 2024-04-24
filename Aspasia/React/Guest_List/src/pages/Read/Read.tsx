import { useEffect, useState } from "react";
import { getItems } from "../../app/services/itemsApi";
import { Item } from "common/types/Items";

const Read = () => {
        const [items, setItems] = useState<Item[]>([]);

        const consultItems = () => {getItems().then(setItems);}

        useEffect(() => {
                consultItems();
        }, []);

        return(
                <div>
                        <h1>Guest List:</h1>
                        {
                        items.map(item => (
                        <h2 key={item.id}>{item.userName}</h2>
                        ))
                }
                </div>
        )
}

export default Read;