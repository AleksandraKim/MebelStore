import './MainStyles.css'


export default function Vhod({login,setLogin,addLogin,password,setPassword,setShow,setRegist}){
   
    return <>
       Логин  <input class='loginVhod' 
                     value={login}
                     onChange={event=>setLogin(event.target.value)}/>
              <br/>
       Пароль <input class='passwordVhod' 
                     type='password' 
                     value={password} 
                     onChange={event=>setPassword(event.target.value)}/>
               <a onClick={()=>{setShow(false)
                                setRegist(true)}} 
                  style={{color:'white',
                          fontStyle:'oblique'}}>Регистрация</a>
              <br/>
              <button class='button1' onClick={addLogin}>✓</button>
           </>
           }

