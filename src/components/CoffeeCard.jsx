import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees,setCoffees}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if(data.deletedCount > 0){      
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
              });
              const  remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining)
                }

            })
            }
          });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure>
            <img
            src={photo}
            alt="coffee image" />
        </figure>
        <div className="">
            <h2 className="card-title">{name}</h2>
            <p className='card-title'>{supplier}</p>
            <p className='card-title'>{details}</p>
            <p className='card-title'>{taste}</p>
            <div className="card-actions justify-end">
            
            <div className="join join-vertical space-y-3">
                <button className="btn join-item">VIEW</button>
                <Link to={`/updateCoffee/${_id}`}>
                   <button className="btn join-item">UPDATE</button>
                </Link>
                <button className="btn join-item btn-warning" onClick={() => handleDelete(_id)}>DELETE</button>
            </div>
            
            </div>
        </div>
</div>
    );
};

export default CoffeeCard;