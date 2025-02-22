import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const createdAt = result.user.metadata.creationTime;
            const  newUser = {name, email, createdAt}
            fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    return (
        <div className='flex justify-center items-center mt-20'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default SignUp;