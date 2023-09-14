'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'





const DeleteBtn = ({id}) => {

  const router = useRouter();

  const removefeed = async() => {

  const confirmed = confirm('are youu uree')
    
  if (confirmed) {
    const res = await fetch(`/api/feeds?id=${id}`,{method: 'DELETE',})

    if (res.ok){
      router.refresh()
    }
  }


  
  }

  return (
    <button onClick={removefeed} className="text-red-400">
    <HiOutlineTrash size={24} />
  </button>
  )
}

export default DeleteBtn