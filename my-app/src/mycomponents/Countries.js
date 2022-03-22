import React, {useEffect, useState} from 'react';

const Countries = () => {//   এপ.জিএস এ কল করা আছে ট্যাগ হিসাবে।
    // আমরা ডাটা লোড করতে ফেস ব্যবহার করি। কিন্তু অনেক সময় ডাটা থাকে না ফলে ইরো ধরা পড়ে আর ইরো ধরা পড়লে পুরো ওয়েব সাইট বন্ধ হয়ে যায়। তাই আমরা স্টেট ব্যবহার করি যাতে ডাটা না থাকলে ফাকা ডাটা দেখিয়ে বাকিটুকু চালু করে। নিচের লাইনে কান্টিস নাম একটা ভেরিয়েব ব্যবহার করা হয়েছে। যদি এখান থেকে ডাটা  না আসে তাহলে পরেরেইউসস্টেট থেকে ফাঁকা এরে দেবে। 
   
  // ইউস ইফেক্টে দুটি প্যারামিটার লাগে। ভুল থেকে রক্ষা পতে পরের প্যারামিটার টা   আগে লেখা ভালো। না হলে আগে থেকেই কোড রানিং হতে শুরু করে। 
 const [countries,setContries]=useState([]);
useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(ress=>ress.json())
    .then(data=>setContries(data))
},[])
    return (
        <div>
          <h1> Hellow from Countries</h1> 
          {//
              countries.map(country=> <Country  name={country.name.common}> </Country>) // এখানে বানাইয়ে রাখলাম
          }
        </div>
    );
};

const Country = (props) => {
    return (
        <div>
           <ul>
               <li>      New list:{props.name}</li>
           </ul>
       
        </div>
    );
};


export default Countries;