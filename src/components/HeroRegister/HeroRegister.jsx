import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState(false);
   

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      //'Password should be at least 6 characters or longer'
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case character."
      );
      return;
    }

  
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setRegisterError("")
        setSuccess("created succussfullu login")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit"  className="btn btn-primary">
                  Register
                </button>

                {registerError && (
                  <p className="text-red-700"> {registerError}</p>
                )}
                {success && <p className="text-green-600"> {success}</p>}

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
