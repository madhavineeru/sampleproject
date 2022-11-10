import { Component } from "react";
import NormalUserScreen from '../NormalUserScreen'



import './index.css'

class LoginForm extends Component{
    state = {username:'',password:''}

    onChangeUserName = event =>{
        this.setState({username:event.target.value})
    }

    onChangePassword = event =>{
        this.setState({password:event.target.value})
    }

    onClickSubmit = (event) =>{
event.preventDefault()
const{username,password} = this.state
let getUsername= JSON.parse(localStorage.getItem("UserName"));
let getPassword = JSON.parse(localStorage.getItem("PassWord"));

if((username === getUsername) && (password === getPassword)){
    this.setState({username:getUsername , password:getPassword})
}
    }
    
    



render(){
    const{username,password} = this.state
    return(
        <div>
           {username&&password ?
           <NormalUserScreen/>:
           
        <form onSubmit={this.onClickSubmit}>
            <h1 className="title">Login</h1>
                <div className="input-container">
            <label className="input-label" htmlFor="userName">UserName</label>
            <input type="text" value={username} className="input-val" id="userName" placeholder="Enter Your UserName"  onChange={this.onChangeUserName}/>
        </div>
        <div className="input-container">
            <label className="input-label" htmlFor="password">Password</label>
            <input type="password" value={password} className="input-val" id="password" placeholder="Enter Your Password"  onChange={this.onChangePassword} autoComplete="on"/>
        </div>
        <button className='btn' type='submit'>Login</button>
        
        </form>
}
        </div>
    )
}
}
export default LoginForm
