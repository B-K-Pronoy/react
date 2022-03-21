import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello.js';
import Welcome from './mycomponents/Welcome';
import Welcome2 from './mycomponents2/Welcome2';
import { useEffect, useState } from 'react';
const number=222;
const sigerr={
color:'red'
}
function App() {
 
  return (
    // এই হলো সকল কম্পোনেন্ট একই ধরণের দেখতে কিন্তু ডাটা আলাদা। এটা ঠিক এপিআই এর মত দেখতে। এই তথ্যগুলো পরপসের মধ্যে ডাটা হিসাবে পাস হবে।
    <div className="App">


<LoadCountries></LoadCountries>



<ExternalUser> </ExternalUser>
<Counter></Counter>
     </div>
     );
  }
  
      <header className="App-header">
     
      
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Bcom 
        </a>
      </header>
// একটা মাত্র ঢাইস এখানে উপরের প্রত্যেকটি কম্পোনেট পরপসের মধ্যে ঢুকে বার বার কল করে রিটার্ন করবে।
function Counter(){
   const [count,setCount] =useState(0)
   const incriseCount=()=>setCount(count+1)
const descseCount=()=>setCount(count-1)
   
  //  const incriseCount=()=>{

  //   const newCount=count+1
  //   setCount(newCount);
  //      }
   
   return(
    <div>
       <h1>Count:{count}</h1>
       <button onClick={incriseCount}>Increase</button>
      
       <button onClick={descseCount}>Increase</button>
      </div>
   )
 
   }

function ExternalUser(){

  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json()
    .then(data=>setUser(data)))
  },[]);
  return (<div>
    <h3>
External user:


{users.map(user=> <User name={user.name} email={user.email}>  </User>)}
    </h3>
  </div>)
}

function User(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <h5>{props.email}</h5>
    </div>
  )
}

function LoadCountries () {
  const [countries,setCountries]=useState([])
  useEffect (()=>{
fetch('https://restcountries.com/v3.1/all')
.then(ress=>ress.json())
.then(data=>setCountries(data))
  },[])
  return( <div>
<h1> name of country :{countries.length}</h1>  
{
  countries.map(country=><Country name={country.name.common} population={country.population}  ></Country>)
}
  </div>
    
  )
}
 function Country (props){
   return(
     <div> <h1> I love :{props.name} population:{props.population
     } </h1></div>
   )

 }

export default App;