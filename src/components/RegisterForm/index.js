import {Component} from 'react'
import { Alert } from 'react-bootstrap'
import LoginForm from '../LoginForm'

import './index.css'

class RegisterForm extends Component {
    state={name:'',
email:'',mobileNumber:'',username:'',password:'',flag:false,login:true}


onChangeName = event =>{
    this.setState({name:event.target.value})
}
onChangeEmail = event =>{
    this.setState({email:event.target.value})
}
onChangeMobileNumber = event =>{
    this.setState({mobileNumber:event.target.value})
}
onChangeUserName = event =>{
    this.setState({username:event.target.value})
}
onChangePassword = event =>{
    this.setState({password:event.target.value})
}

submitForm  = event =>{

    event.preventDefault()
    const{name,email,mobileNumber,password,username} = this.state

    if(!name || !email ||!password || !username || !mobileNumber){
        
        this.setState({flag:true})

    }
    else{
        this.setState({flag:false})
        localStorage.setItem('UserName',JSON.stringify(username));
        localStorage.setItem("Password",JSON.stringify(password));

        console.log("save in local storage")
        this.setState({login:false})
    }
}

onClickLogin = () =>{
    this.setState({login:false})
}

    render(){
        const{name,email,mobileNumber,password,username,flag,login} = this.state
        return(
            <>
<div className='main-container'>
    {login?(
    <form className="register-container" onSubmit={this.submitForm}>
        <h1 className='title'>Register</h1>
        <div className="input-container">
            <label className="input-label" htmlFor="name">Name</label>
            <input type="text" value={name} className="input-val" id="name" placeholder="Enter Your Name"  onChange={this.onChangeName}/>
        </div>
        <div className="input-container">
            <label className="input-label" htmlFor="email">Email</label>
            <input type="text" value={email} className="input-val" id="email" placeholder="Enter Your Email"  onChange={this.onChangeEmail}/>
        </div>

        <div className="input-container">
            <label className="input-label" htmlFor="mobile">Mobile</label>
            <input type="number" value={mobileNumber} className="input-val" id="mobile" placeholder="Enter Your Mobile Number"  onChange={this.onChangeMobileNumber}/>
        </div>
        <div className="input-container">
            <label className="input-label" htmlFor="userName">UserName</label>
            <input type="text" value={username} className="input-val" id="userName" placeholder="Enter Your UserName"  onChange={this.onChangeUserName}/>
        </div>
        <div className="input-container">
            <label className="input-label" htmlFor="password">Password</label>
            <input type="password" value={password} className="input-val" id="password" placeholder="Enter Your Password"  onChange={this.onChangePassword} autoComplete="on"/>
        </div>
        <button className='btn' type='submit'>Register</button>
    <p onClick={this.onClickLogin}>Already registered {" "} login in?</p>
    {flag && (
        <Alert color='primary' variant='danger'>Please Fill </Alert>
    )}
    </form>):(
   <LoginForm/>
   )}
</div>
</>
      
      )
    }
}
export default RegisterForm