import React from 'react';
function Hello (props) {
    function DoThis(B) {
         alert("BCOM");
    }
    return (
 <div>   
  
     <button onClick={DoThis.bind(this,'Bcom ')}> Click Me</button>
     <h1> Hello {props.name} your age is { props.age}</h1>
     </div>
      
    );
}
export default Hello;