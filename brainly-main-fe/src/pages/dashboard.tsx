import { useEffect, useState } from 'react'

import { AddContent } from '../components/addContent'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { PlusIcon } from '../icon/plusIcon'
import { ShareIcon } from '../icon/shareIcon'
import { Sidebar } from '../components/sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
  const {contents, refresh}= useContent()
  const [openModal, setModalOpen]= useState(false)
  useEffect(()=>{
    refresh()
  },[openModal])
  return (
    <div>
      <Sidebar/>
    <div className='p-4 ml-64 h-screen bg-slate-100'>
      <AddContent open={openModal} onClose={()=>{setModalOpen(false)}}/>
    <div className='flex justify-end gap-3'>
    <Button onClick={()=>{
      setModalOpen(true)
    }} variant='primary' text='Add Content' startIcon={<PlusIcon/>}></Button>
    <Button onClick={
      async()=>{
        const response= await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
          share: true
        },{
      headers:{
        "Authorization": localStorage.getItem("token")
      }})
        const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
        alert(shareUrl);
        navigator.clipboard.writeText(shareUrl)
      }
    } variant='secondary' text='Share' startIcon={<ShareIcon/>}></Button>
    </div>
    <div className='flex gap-4 mt-5 flex-wrap'>
      {contents.map(({type, title, link})=>
      <Card type={type} link={link} title={title}></Card>)}
     
    </div>
    </div>
    </div>
  )
}