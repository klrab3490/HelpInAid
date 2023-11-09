"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [error,setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    // e.preventDefault();
    // try {

    // } catch (error)  {
    //   setError(true);
    // }
    return <Link href={'/otp'}/>
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className='login'>
          <div className="signwith">
            <h3>Login</h3>
          </div>
          <form>
            <div>
              <h3 className='mr-1'>Email : </h3>
              <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <h3 className='mr-1'>Password : </h3>
              <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='gap-2'>
              <Link href={"/otp"}>

              <button type='submit' className='bg-blue-600 text-white' > Login </button>
              </Link>
            </div>
            {error && <span>Wrong Email Or Password</span>}
          </form>
        </div>
      </div>
    </main>
  )
}

export default Home;