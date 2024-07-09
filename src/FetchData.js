import React, { useEffect, useState } from 'react'

function FetchData() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))

    }, [])
    
return (
    <div>

        Genta Pradana Putra Agya <br/>
        A11.2021.13499 <br/>

        <button>Fetch Api</button>

        <ul>
            {records.map((list, index)=> (
                <li key={index}>{list.id} | {list.name}</li>
            ))}
        </ul>
    </div>
    )
}

export default FetchData;