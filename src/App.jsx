
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const loadedCoffees = useLoaderData();
  
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-xl font-bold'>Total Coffees : {loadedCoffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
