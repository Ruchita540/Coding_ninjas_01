import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
function FirstApi(){
    const[data, setData]=useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data);
        })
        console.log(data);
    },[])
    return(
        <div>
            {data.url}
        </div>
    )
}
export default FirstApi