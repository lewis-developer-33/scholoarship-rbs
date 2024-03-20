'use client'
import { useUserContext } from '@/contexts/user'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const page = () => {
  
  
  const [name,setName] = useState('')
  const [contact,setContact] = useState('')
  const [age,setAge] = useState('')
  const [club,setClub] = useState('')
  const [gender,setGender] = useState('')
  const [grade,setGrade] = useState('')
  const [income,setIncome] = useState('')
  const [sports,setSports] = useState('')
  const [nationality,setNationality] = useState('')
  const [religion,setReligion] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const userDetails = {
        name,
        contact,
        age,
        club,
        gender,
        grade,
        income,
        sports
    }
    console.log(userDetails)
  }
  return (
    <div>
        
        <main className=' mx-auto max-w-7xl'>
            <section className='w-[450px] flex flex-col gap-5 py-5'>
                <form 
                className='flex flex-col gap-5 py-5'
                action="">

                <Input
                type='text'
                placeholder='Name'
                onChange={(e) => {setName(e.target.value)}}
                />
                <Input
                type='text'
                placeholder='Contact'
                onChange={(e) => {setContact(e.target.value)}}
                />
                <Input
                type='text'
                placeholder='Age'
                onChange={(e) => {setAge(e.target.value)}}
                />
                <Input
                type='text'
                placeholder='Club'
                onChange={(e) => {setClub(e.target.value)}}
                />
                <Input
                type='text'
                placeholder='Nationality'
                onChange={(e) => {setNationality(e.target.value)}}
                />
                <Input
                type='text'
                placeholder='Religion'
                onChange={(e) => {setReligion(e.target.value)}}
                />
                <Select 
                onValueChange={(value) => {
                    setGender(value)
                }}
                className='my-4 text-slate-900'>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                        <SelectItem value='male' className=''>Male</SelectItem>
                        <SelectItem value='female' className=''>Female</SelectItem>    
                    </SelectGroup>
                </SelectContent>
                </Select>
                <Select 
                onValueChange={(value) => {
                    setGrade(value)
                }}
                className='my-4 text-slate-900'>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Grade</SelectLabel>
                        <SelectItem value='A' className=''>A</SelectItem>
                        <SelectItem value='B' className=''>B</SelectItem>    
                        <SelectItem value='C' className=''>C</SelectItem>    
                        <SelectItem value='D' className=''>D</SelectItem>    
                        <SelectItem value='E' className=''>E</SelectItem>    
                    </SelectGroup>
                </SelectContent>
                </Select>
                <Select 
                onValueChange={(value) => {
                    setIncome(value)
                }}
                className='my-4 text-slate-900'>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select Monthly Income" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Monthly Income</SelectLabel>
                        <SelectItem value='10' className=''>Below 10K</SelectItem>
                        <SelectItem value='20' className=''>Below 20K</SelectItem>    
                        <SelectItem value='30' className=''>Below 30K</SelectItem>    
                        <SelectItem value='40' className=''>Below 40K</SelectItem>    
                        <SelectItem value='50' className=''>Below 50K</SelectItem>    
                    </SelectGroup>
                </SelectContent>
                </Select>
                <Select 
                onValueChange={(value) => {
                    setSports(value)
                }}
                className='my-4 text-slate-900'>
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select Sports" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Sports</SelectLabel>
                        <SelectItem value='football' className=''>Football</SelectItem>
                        <SelectItem value='volleyball' className=''>Volleyball</SelectItem>    
                        <SelectItem value='swimming' className=''>Swimming</SelectItem>    
                        <SelectItem value='netball' className=''>Netball</SelectItem>    
                        <SelectItem value='hockey' className=''>Hockey</SelectItem>    
                    </SelectGroup>
                </SelectContent>
                </Select>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
                </form>
            </section>

            <section className='w-full py-5'>
                <h2 className='font-semibold text-3xl text-black'>Activities</h2>
                <p className='font-semibold text-sm text-black/80'>Take a sneak peak into the <span className='text-blue-800'>thrilling</span> accomodatios we offer</p>
                <div>

                </div>
            </section>
            
        </main>
    </div>
  )
}

export default page