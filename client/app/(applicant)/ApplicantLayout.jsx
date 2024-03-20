'use client'
import { useUserContext } from '@/contexts/user'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const ApplicantLayout = ({children}) => {
    const pathName = usePathname()
  const {userValue,setUserValue} = useUserContext()
  return (
    <div>
        <header className='flex items-center justify-between px-10 py-4 shadow-md'>
            <div>
                <Link href='/' className='font-bold text-lg'>RBS - Scholarship Foundation</Link>
            </div>
            <div className='flex items-center gap-4 font-semibold'>
                <Link className={`${pathName.endsWith('accomodations') && 'text-blue-800'}`} href='/accomodations'>Rules</Link>
                <Link className={`${pathName.endsWith('activities') && 'text-blue-800'}`} href='activities'>Activities</Link>
            </div>
            <div>
                <Button>Log In</Button>
            </div>            
        </header>
        <section className='mx-auto max-w-6xl pt-8'>
            {children}
        </section>
    </div>
  )
}

export default ApplicantLayout