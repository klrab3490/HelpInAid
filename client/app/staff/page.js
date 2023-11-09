import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-5">
            <div className="z-10  w-full items-center font-mono text-sm lg:flex">
                <div>
                    <h1 className='center'>Staff Dashboard</h1>
                    <div className='flex px-5'>
                        <button class="p-1 mr-3 outline rounded border-1" >
                            <Link href={'/staff/newpatient'} >New Patient</Link>
                        </button>
                        <button class="p-1 outline rounded border-1">
                            <Link href={'/staff/appointment'} >Appointment Booking</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;