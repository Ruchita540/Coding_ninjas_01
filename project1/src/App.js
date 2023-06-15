// make a todo app, add one input field to it and a add button, when we press the add button the text inside the input field should be added in the list.

// fetch the data from api https://jsonplaceholder.typicode.com/users (will return an array of users) display name of each user in the browser

// import  React, { useState , useEffect} from 'react'
// import axios from 'axios'

// const App=()=>{
//     const [data, setData]= useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users ')
//         .then((response)=>response.json)
//         .then((data)=>{setData(data)})
//     },[])
//     return(
//         <div>
//             {data.map((e)=>{
//                 return(
                    
//                     <>
//                     {console.log(e)}
//                     </>
//                 )
//             })}
//         </div>
//     )
// }
// export default App;

// import React ,{useState} from 'react'

// const App=()=>{
//    const[count, setCount] = useState(0);
//    return(
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
  

//     </div>
//    )
// }
// export default App;

// import React, { Component } from "react"
// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             name:"prepbytes"
//         }
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.name}
//             </div>
//         )
//     }
// }
// export default  App

// import React, { Component } from 'react'
// import Counter1 from './Counter1'

// export default class app extends Component{
//     constructor(){
//         super();
//         // this.state={
//         //     count : 0
//         // }
//     }
//     componentDidMount(){
//         console.log('component is mounted');
//     }
//     increment(){
//         this.state({count:this.state.count+1})
//     }
//     render(){
//         return(
//             <div>
//                 <Counter1 number={this.state.count}></Counter1>
//                 <button onClick={()=>{this.increment()}}>click Me</button>
//             </div>
//         )
//     }
// }

import Navbar from './Components/Navbar';
import Routing from './Components/Routing';
import './App.css';

function App() {
  return (
    <div className="App">     
     <Navbar/>
     <Routing/>
     
    </div>
  );
}

export default App;