import React from 'react';
import Swal from 'sweetalert2'

const AddCoffe = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
              Swal.fire({
                title: 'success',
                text: 'New Coffee Added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    }
    return (
        <div className='border border-white'>
          <h2 className='text-3xl font-bold'>Add new coffee</h2>
          <div className="hero bg-base-200">
  <div className="hero-content">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleAddCoffee}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffe Name</span>
          </label>
          <input type="text" placeholder="coffe name" className="input input-bordered" name='name' required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" placeholder="quantity" className="input input-bordered" name='quantity' required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier Name</span>
          </label>
          <input type="text" placeholder="supplier" className="input input-bordered" name='supplier' required />
        </div> 

         <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" placeholder="taste" className="input input-bordered" name='taste' required />
        </div>
        
          <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="category" className="input input-bordered" name='category' required />
        </div> 
        
         <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="details" className="input input-bordered" name='details' required />
        </div> 
        
         <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo-url" className="input input-bordered" name='photo' required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddCoffe;