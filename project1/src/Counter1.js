import React, { useEffect } from "react";
export default function Counter1({number}){
    useEffect(()=>{
        console.log('function updated');
        return()=>{
            console.log('function componet:removed');
        }
    },[number])
    return(
        <div>
            <h1>{number}</h1>
        </div>
    )
}