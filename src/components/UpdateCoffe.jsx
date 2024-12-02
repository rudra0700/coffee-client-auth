import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {

    const loadedCoffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, category, details, photo} = loadedCoffee;

    const updateCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newUpdatedCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newUpdatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUpdatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            if(data.modifiedCount){
              Swal.fire({
                title: 'success',
                text: 'Coffee Updated',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    }
    return (
        <div className='border border-white'>
          <h2 className='text-3xl font-bold'>My Coffee is : {loadedCoffee.name}</h2>
          <div className="hero bg-base-200">
  <div className="hero-content">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={updateCoffee}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffe Name</span>
          </label>
          <input type="text"  className="input input-bordered" name='name' defaultValue={name} required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text"  className="input input-bordered" name='quantity' defaultValue={quantity} required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier Name</span>
          </label>
          <input type="text"  className="input input-bordered" name='supplier' defaultValue={supplier} required />
        </div> 

         <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" className="input input-bordered" name='taste' defaultValue={taste} required />
        </div>
        
          <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" className="input input-bordered" name='category' defaultValue={category} required />
        </div> 
        
         <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" className="input input-bordered" name='details' defaultValue={details} required />
        </div> 
        
         <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" className="input input-bordered" name='photo' defaultValue={photo} required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Coffee</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default UpdateCoffe;