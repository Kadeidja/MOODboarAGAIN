import { useState } from 'react';
import userIcon from '../assets/usericon.svg'
import keyIcon from '../assets/keylock.svg'
import axios from 'axios';

export default function LogInComp(){
const [data,setData] = useState({
    email:'',
    password: '',
})
const loginUser = (e) =>{
    e.preventDefault()
    axios.get('/login')
    
}
return(
<>
<div className="boxDivClass divLogIn">
    <div className="titleSpaceClass">
    <h1> LogIn In </h1>
    </div>
    <div className="connexionSpaceClass">
        <form onSubmit={loginUser}>
        <label id="userMailLogInId" className="labelClass" htmlFor="userMail">Mail</label>
        <div className="inputSpaceClass">        
    <img
          className="loginIcon"
          src={keyIcon}
          alt="icon"/>
          <input id="userMail" name="loginmailinput" type="email" className="inputcssClass" placeholder="Entrez votre e-mail" value={data.email} onChange={(e)=>setData({...data, email: e.target.value})}/>
        <br/>
        </div>

        <label id="userPswdLogInId" className="labelClass" htmlFor="userPswd">Mot de passe</label>
            <div className="inputSpaceClass">        
            <img
          className="loginIcon"
          src={keyIcon}
          alt="icon"/>
                <input id="userPswd" name="loginpswdinput" type="password" className="inputcssClass" placeholder="Entrez votre mot de passe" value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}/>
            <br/>
        </div>

<div className='btnSpaceClass'>

        <div className='soloBtnSpaceClass'>
            <label id="userSubmitLogInId" className="labelClass" htmlFor="userSubmit">
                <input id="userSubmit" name="loginSubmitinput" type="submit" className="buttoncssClass loginBtn"  value="Soumettre"/>
            </label>
        </div>
</div>
        </form>
</div>
</div>

</>
)
}