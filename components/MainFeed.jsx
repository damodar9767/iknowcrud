import React from 'react'
import DeleteBtn from './DeleteBtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'







const getFedd = async () =>{
  try {
    const res = await fetch('https://iknowcrud-git-main-damodar9767.vercel.app/api/feeds',{
      cache:'no-store',

    })

    if (!res.ok){
      throw new Error("Faile to fetch dta")
     }

   

     return res.json();
    
  } catch (error) {
    console.log("eror while fetting feed",error);
  }
}


const MainFeed = async () => {
  const { feed } = await getFedd();
  
  
  return (
    <>

    {feed.map(t => ( 
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
            </div>

    ))}

  
    </>

    )
}

export default MainFeed