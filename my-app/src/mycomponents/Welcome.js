import React, {Component} from 'react';
class Welcome extends Component {
doThis(w){
    alert(" Welc")
}
    
    
render () {
return <div>
    <button onClick={this.doThis.bind(this,"Wec")}> Click Here</button>
</div>
   
}

}
export default Welcome;