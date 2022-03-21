// import logo from './logo.svg';
// import './App.css';
// import Hello from './mycomponents/Hello.js';
// import Welcome from './mycomponents/Welcome';
// import Welcome2 from './mycomponents2/Welcome2';
// import { useState } from 'react';
// const number=222;
// const sigerr={
// color:'red'
// }

// const singar={name:'Bcom', age:23}
// function App() {
  
// const list=['Manna','Kanchan','Rubal','Alomgir']
// const singers=[
// {name:'Agun', singTotal:200},
// {name:'Tutol', singTotal:250},
// {name:'Najmin', singTotal:100},
// {name:'Tisha', singTotal:300},
// {name:'Doli',singTotal:400}
// ]
// // const Producs=[
// //   {name:'TV',price:15000},
// //   {name:'Laptop',price:105000},
// //   {name:'Mobile',price:10000},
// //   {name:'Watch',price:5000},

// // ]
//   return (
//     // এই হলো সকল কম্পোনেন্ট একই ধরণের দেখতে কিন্তু ডাটা আলাদা। এটা ঠিক এপিআই এর মত দেখতে। এই তথ্যগুলো পরপসের মধ্যে ডাটা হিসাবে পাস হবে।

    
//     <div className="App">


//      {
//         list.map(nayol=><li>{nayol}</li>)}
     
//   {
//      singers.map(singer=><div className='container'> <h1> name:{singer.name}</h1>
//      and album: {singer.singTotal}
//      </div>
//      )
//   }
  
//       <header className="App-header">
      
//       <Producs id="01" name="laptop"></Producs>

//       <Friend id='01033' name="Bcom" job="Teacher"></Friend>
//       <Friend id='01022' name="Pronoy" job="Manager"></Friend>
//       <Friend id='00441'name="Borun" job="Webdevoloper"></Friend>

// <Nayok name='' movi="palithakaow"></Nayok>
// <Nayok name='kanchan' movi="Borobone"></Nayok>
// <Nayok name='rubal' movi="Chotogram"></Nayok>

//         {<img src={logo} className="App-logo" alt="logo" />
//   <h1 style={{color:"red"}}>How are your? </h1>
//     <h1> Hello</h1>
// <div className="container">
// <h1> Hellow dud {number}</h1>
// <h2> hi {singar.name}</h2>
// </div> }

// { <Welcome></Welcome>
//         <h1 style={sigerr}> HI EVERY ONE</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Bcom 
//         </a>}
//       </header>
      

//     </div>
   
//   );
// }
// // একটা মাত্র ঢাইস এখানে উপরের প্রত্যেকটি কম্পোনেট পরপসের মধ্যে ঢুকে বার বার কল করে রিটার্ন করবে।
// function Friend (props){
//   console.log(props);
// return (
//   <div className='parant'>
    
//     <div className='dear'>
//   <h3> My dear {props.name}</h3> <p> your id:{props.id} and ocupation: {props.job} </p>
   
//   </div>
//   </div>
// )
// }
// function Producs(props){
//   console.log(props)
//   return( 
//   <div>
//   <h1> name:{props.id}</h1>
//   <p> price:</p>
// </div>
//   )
// }
// function Nayok (props){
// return(

//   <div className='container'>
//     <h4> Name:{props.name} </h4>
//     <p></p>
//   </div>
// )


// // function Counter(){
// //   const []=useState;
// //   return(
// //     <div>
// //       <h1>Count:{numbe}</h1>
// //       <button>Increase</button>
// //     </div>
// //   )
// // }
//  }

// export default App;