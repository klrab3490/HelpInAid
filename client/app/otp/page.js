import { output } from '@/next.config'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div>
                <h1><u>Otp Verification</u></h1>
                <form>
                    <label>Enter Otp</label>
                    <input type='number' class="ml-2" ></input>
                </form>
            </div>
        </div>
    </main>
  )
}

export default page;