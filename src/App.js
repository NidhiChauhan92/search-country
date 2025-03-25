import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

function App() {
  const [maps, setMaps] = useState([]);
  const [filteredMaps, setFilteredMaps] = useState([]);


  //fetch the data
  useEffect(()=>{
    const getData= async () =>{
      try{
        const response = await axios.get(`https://countries-search-data-prod-812920491762.asia-south1.run.app/countries`);
        setMaps(response.data);
        setFilteredMaps(response.data);
        
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }
    getData();
  },[])


  let timer ;
  const handleChange =(e)=>{
    const searchValue = e.target.value.trim().toLowerCase();
    if (searchValue.trim() === "") {
      setFilteredMaps(maps); // Restore initial list when cleared
      return;
    }

    timer = setTimeout(()=>{
    
      setFilteredMaps(maps.filter((item)=>item.common.toLowerCase().includes(searchValue)));
    },1000)


  }




  return (
      <>
      <header className='search-container'>
        <input className='search' type = 'text' onChange={handleChange}></input>
      </header>
      <section>
        <div className='container'>
          {filteredMaps.map((item, index)=>(
            <Card key={index} item={item}/>
          ))}
        </div>
      </section>

      </>
    
  );
}

export default App;