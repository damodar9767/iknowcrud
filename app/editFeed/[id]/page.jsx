import EditFeed from '@/components/EditFeed'
import React from 'react'



const getFeedbyID = async (id) => {

  try {
    const res = await fetch(`https://iknowcrud-git-main-damodar9767.vercel.app/api/feeds/${id}`,{cache: "no-store"})

    if (!res.ok){
      throw new Error("Failed to get the feed to be edited " )
    }

    console.log(res);
    return res.json()
    
  } catch (error) {
    console.log(error);
  }

}

const page = async ({params}) => {

 const  {id} = params
 console.log(id);

 const {feed} = await getFeedbyID(id);
 console.log(feed);

 const {title, description} = feed;


  return (
    <EditFeed id={id} title= {title} description={description} />
   )
}

export default page