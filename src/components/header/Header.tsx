import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { AiOutlineLogout, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { BiBellMinus } from 'react-icons/bi'
import { AuthContext } from 'src/context/Auth.context'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const {logout} = useContext(AuthContext)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);


    return (
        <header className={`${scrolled && 'bg-[#E10856]'}`}>
            <div className='flex items-center space-x-2 md:space-x-10 '>
                <Image src={'/logo.svg'} alt='logo' width={56} height={56} className={'cursor-pointer object-contain'} />
                <ul className='md:flex hidden space-x-4'>
                    <li className='navLink'>Home</li>
                    <li className='navLink'>Movies</li>
                    <li className='navLink'>TV Shows</li>
                    <li className='navLink'>New</li>
                    <li className='navLink'>Popular</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <AiOutlineSearch className='h-6 w-6 cursor-pointer' />
                <p className='hidden md:inline'>Kids</p>
                <BiBellMinus className='h-6 w-6 cursor-pointer' />
                <Link href={'/Account'}>
                    <AiOutlineUser className='h-6 w-6 cursor-pointer' />
                </Link>
                <AiOutlineLogout className='h-6 w-6 cursor-pointer' onClick={logout}/>
            </div>

        </header>

    )
}

export default Header