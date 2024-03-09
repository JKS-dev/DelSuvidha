'use client';
import { usePathname } from 'next/navigation';
import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Abril_Fatface } from "next/font/google";
import {UserFloatingMenu} from '@/components/FloatingMenu/UserFloatingMenu'
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
                    IOT-Console
                </div>
                <div className='flex gap-4 items-center'>
                        {
                            pathName[1] !== "Dashboard"?
                        <button onClick={()=>(router.push("/Auth/signin"))} className={styles.btn} >
                            Login
                        </button>
                         :<UserFloatingMenu />
                        }
                </div>
            </div>
            :null
        }
        </nav>
    );
}