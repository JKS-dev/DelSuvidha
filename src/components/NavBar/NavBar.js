'use client';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import styles from '@/styles/navbar.module.css'
import Logo from '../../../public/Logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Abril_Fatface } from "next/font/google";
import {UserFloatingMenu} from '@/components/FloatingMenu/UserFloatingMenu'
import { SimpleBtn } from '../Btn/Btn';
const abrilFatface = Abril_Fatface({weight: '400', subsets: ["latin"] });

export function NavBar() {
    const router = useRouter();
    const pathName = usePathname().split('/');
    console.log(pathName);

    return (
        <nav>
             {
                pathName[1] !== "Auth"?
                <div className={styles.NavBar}>
                <div style={abrilFatface.style} onClick={()=>(router.push("/"))} className={styles.Logo}>
                <Link href='/' className="flex h-full items-center font-Logo">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width="144"
                        height="48"
                        className='cursor-pointer m-2'
                        priority
                    />

                </Link>
                </div>
                <div className='flex gap-4 items-center'>
                        {
                            pathName[1] !== "Dashboard"?
                        <SimpleBtn onClick={()=>(router.push("/Auth/signin"))} text="Login"  />
                         :<UserFloatingMenu />
                        }
                </div>
            </div>
            :null
        }
        </nav>
    );
}