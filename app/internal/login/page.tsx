'use client'
import React , {useState, useEffect}from 'react'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { useToast } from "@/hooks/use-toast"

export default function Login() {
  const { toast } = useToast()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [valid , setValid] = useState(false)

   useEffect(() =>{
    if(userName.length > 0 && password.length >0){
     
        setValid(true)
    }
   },[userName, password])

   function handleLogin() {
    if(userName =="admin" && password === "admin"){
       redirect('/internal/overview')
    }else{
      toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    }
   }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
      
      <div className="flex flex-col items-center justify-center space-y-4 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      <div className='m-[-80px]'> 
        <Image alt='logo' src='/logo-color.svg' width={200} height={200}/>
      </div>
        <h3 className="text-xl  font-semibold">Internal Adim Portal</h3>
        <p className="text-sm text-gray-500">
          Use your email and password to login
        </p>
        
        <Label className='flex w-80'>UserName</Label>
        <Input placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <Label className='flex w-80'>Password</Label>
        <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button disabled={!valid} 
        className="flex h-10 w-full items-center 
        justify-center rounded-md border text-sm 
        transition-all focus:outline-none" 
        onClick={() => handleLogin()}
        variant="outline">Login</Button>
 
      </div>
    
    </div>
  </div>
  )
}
