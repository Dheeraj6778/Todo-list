import { useState } from "react";

export default function Items(props){
    const [itemsArr,setItemsArr]=useState([]);
    setItemsArr([...itemsArr,props.item]);
    return(
        <div>
            <h3>Completed Items:</h3>
        </div>
    )
}