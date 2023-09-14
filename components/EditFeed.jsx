'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const EditFeed = ({id,title,description}) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/feeds/${id}`,{
              method: "PUT",
              headers: {
                'Content-type': "application/json"
              },
              body:JSON.stringify({newTitle,newDescription}),
  
            });
  
            if(res.ok){
              router.push('/')
            }else{
              throw new Error('failed to udate post')
            }
          } catch (error) {
            console.log(error);
            
          }

    }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-3 gap-3">
    <input
      onChange={(e) => setNewTitle(e.target.value)}
      value={newTitle}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Topic Title"
    />
 
    <input
      onChange={(e) => setNewDescription(e.target.value)}
      value={newDescription}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Topic Description"
    />
 
    <button
      type="submit"
      className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
    >
      Edit Feed
    </button>
  </form>
  )
}

export default EditFeed