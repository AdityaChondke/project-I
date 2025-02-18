'use client'
import React , {useState, useEffect}from 'react'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

export default function Login() {
 
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [OTP, setOTP] = useState('')
    const [email, setEmail] = useState('')
    const [valid , setValid] = useState(false)
    const investmentAssets = [
      "Equity (Stocks)",
      "Mutual Funds",
      "Fixed Deposits (FD)",
      "Bonds & Debentures",
      "Real Estate",
      "Private Equity",
      "Startups (Angel Investing)",
      "Cryptocurrencies",
      "Commodities (Gold, Silver, Oil)",
      "Foreign Exchange (Forex)"
    ];

    const [selectedAssets, setSelectedAssets] = useState<any[]>([]);

    const [registered, setRegistered] = useState(false)

  const toggleSelection = (asset:any) => {
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((a) => a !== asset) : [...prev, asset]
    );
  };
   useEffect(() =>{
    if(userName.length > 0 && password.length >0){
        setValid(true)
    }
   },[userName, password])

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
      
      <div className="flex flex-col items-center justify-center space-y-4 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      <div className='m-[-80px]'> 
        <Image alt='logo' src='/logo-color.svg' width={200} height={200}/>
      </div>
        <h3 className="text-xl  font-semibold">Sign In</h3>
        <p className="text-sm text-gray-500">
          Use your email and password to sign in
        </p>
        
        <Label className='flex w-80'>UserName</Label>
        <Input placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <Label className='flex w-80'>Password</Label>
        <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
       
           <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button disabled={!valid} className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none" variant="outline">Login</Button>
      
      </AlertDialogTrigger>
     
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Scan QR to generate OTP</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <Image width={500}
      height={500} src='OTP.svg' alt='OTP'/>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          
          <Input placeholder='OTP' type='password' value={OTP} onChange={(e) => setOTP(e.target.value)}/>
          
          <AlertDialogAction disabled={!(OTP.length>0)} onClick={ () => redirect('/dashboard')}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


    <AlertDialog>
     
      <AlertDialogTrigger asChild>
      <Button disabled={!valid} className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none" variant="outline">Sign Up</Button>
      
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Registration from</AlertDialogTitle>
          <AlertDialogDescription >
           Please fill out the following details 
          </AlertDialogDescription>

          <div className='flex flex-row'>
          <Input disabled={registered} placeholder='First Name'  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input disabled={registered} placeholder='Last Name'  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>  
          <Input placeholder='Email'  disabled={registered} value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder='Contact'  disabled={registered} value={email} onChange={(e) => setEmail(e.target.value)}/>
          
          <Label className='flex pl-2 pt-5 w-80'>Preferences (Choose from the following)</Label>
         
          <div className="grid grid-cols-3 gap-3 py-4">
          {investmentAssets.map((asset) => (
          <Badge
            key={asset}
          
            variant={selectedAssets.includes(asset) ? "default" : "secondary"}
            className={`cursor-pointer ${registered ? "pointer-events-none opacity-50" : ""}`}
            onClick={() => toggleSelection(asset)}
          >
            {asset}
          </Badge>
          ))}
        </div>
        
        </AlertDialogHeader>
        <AlertDialogFooter> {
          registered ?<div className='flex flex-row items-center'>
           <Label className='flex w-90 items-center justify-center'>Thank you, our team will reach out to you soon</Label>
         
         
          </div>
          :        
          <AlertDialogAction disabled={!(selectedAssets.length>0)} onClick={ () => setRegistered(true) }>Continue</AlertDialogAction>
        
  }  </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>
    
    </div>
  </div>
  )
}
