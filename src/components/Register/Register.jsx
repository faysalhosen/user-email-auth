import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'



const Register = () => {
    const [registerError,setRegisterError] = useState({error:false,message:''});
    const [success,setSuccess] = useState(false);
    const [showPassword,setShowPassword] = useState(false)





    const handleRegister = e => {
        e.preventDefault();

         // reset error
         setRegisterError ({error:false,message:''});
         setSuccess({error:false,message:''});
 
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        if(password.length <6){
            setRegisterError({error:true,message:'Password should be at least 6 characters or longer'});
            //'Password should be at least 6 characters or longer'
            return;

        }
        
        else if(!/[A-Z]/.test(password)){
            setRegisterError({error:true,message:'Your password should have at least one upper case character.'})
            //'Your password should have at least one upper case character.'
        

        }

            // create user
            createUserWithEmailAndPassword (auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfullu')
            })
            .catch (error => {
                console.log(error);
                setRegisterError({error:true,message:error});
            })
        
    }

    return(
        <div className='mx-auto md: w-1/2 '>
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className='mb-4 w-3/4 py-2 px-4' type="email" placeholder='
                Email Address' name="email" id="" />
                <br />
                <input placeholder='Password' className='mb-4 w-3/4 py-2 px-2' type= {showPassword ? "text" :"password"} name="password" id="" />
                <br />
                <input className='mb-4 w-3/4 btn btn-secondary' type="submit" value="register" id="" />
                <span onClick={ () => setShowPassword(!showPassword)}>Show 
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
                </span>
            </form>

            {
                registerError.error && <p className="text-red-700"> {registerError.message}</p>
            }
            {
                success && <p className="text-green-600"> {success}</p>
            }
        </div>
    );
};

export default Register;