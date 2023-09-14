'use client'
import DeleteBtn from '@/components/DeleteBtn';
import Link from 'next/link';
import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { HiPencilAlt } from 'react-icons/hi';


const page = () => {
    const [search, setSearch] = useState('');
    const [feed1, setFeed] = useState([]);
  





    const handlesearch = async (e) => {

      e.preventDefault()

        if (!search){
            alert(' Enter items to be searched')
            return
        }

      
            const res = await fetch(`/api/searchfeeds?title=${search}`)
            const { feed } = await res.json();

            setFeed(feed);

           
    }
    
  return (
    <>
        <form className=' search' onSubmit={handlesearch}>
            
            <input type='text' className='searchinput' placeholder='Search for a title' onChange={(e) => setSearch(e.target.value)} name='search' value={search}    />

           <button type='submit' > <BsSearch  className='searchicon'/></button>
        </form>


        {feed1.length===0 && <div className='max-w-lg mx-auto '><h2 className=''>Nothing to display.Please search something  that is in the databse</h2></div>}


        

        {feed1 && feed1.map(t => ( 
      <div className="p-4 border border-slate-300 m-3 justify-between gap-5 flex items-start" key={t._id} >
                <div className="">
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                    <DeleteBtn id={t._id}/>
                    <Link href={`/editFeed/${t._id}`}>
                     <HiPencilAlt size={24} />
                    </Link>

                </div>
            </div>))}

      


      

   



    </>
  )
}

export default page