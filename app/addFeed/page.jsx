'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'







const page = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();


    const handleSubmit = async( e)  =>{

      if(!title || !description){
        alert('Title and descripion required')
        return
      }
    
      try {
        const res = await fetch('/api/feeds',{
          method: "POST",
          headers: {
            'Content-type': "application/json"
          },
          body:JSON.stringify({title,description}),
    
        });
    
        if(res.ok){
          router.push('/')
        }else{
          throw new Error('failed to create new post')
        }
      } catch (error) {
        console.log(error);
        
      }
    
    
        console.log(title,description);
    
    }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-3 gap-3">
   <input
     onChange={(e) => setTitle(e.target.value)}
     value={title}
     className="border border-slate-500 px-8 py-2"
     type="text"
     placeholder="Topic Title"
   />

   <input
     onChange={(e) => setDescription(e.target.value)}
     value={description}
     className="border border-slate-500 px-8 py-2"
     type="text"
     placeholder="Topic Description"
   />

   <button
     type="submit"
     className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
   >
     Add Feed
   </button>
 </form>)
}

export default page