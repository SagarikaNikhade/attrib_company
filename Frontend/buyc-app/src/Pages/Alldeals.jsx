import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  Table  from './Table';

const Alldeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let obj={}
    axios.get(`https://relieved-teal-parrot.cyclic.app/inventory`, {
      params: obj
    }).then((res) => setData(res.data))
  }, [])

  return (
    <div>
      {data.length >0 && data.map((el)=>{
        return ( 
           <Table key={el.id} {...el}/>
         )
      })}
    </div>
  )
}

export default Alldeals
