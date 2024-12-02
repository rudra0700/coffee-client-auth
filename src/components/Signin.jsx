import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Signin = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);

        signInUser(email, password)
        .then(res => {
            console.log(res.user);
            const lastSignInTime = res.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};

            fetch(`http://localhost:5000/users/${email}`, {
              method: "PATCH",
              headers: {
                "content-type" : "application/json"
              },
              body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
              console.log("sign in info updated in DB" , data);
            })
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    return (
        <div className='flex justify-center items-center mt-20'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignIn}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Signin;