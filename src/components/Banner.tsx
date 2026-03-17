'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner() {

    const imgRotate = ['/img/cover.jpg' , '/img/cover2.jpg' , '/img/cover3.jpg' , '/img/cover4.jpg'];
    const[index, setIndex] = useState(0);
    const router = useRouter();

    const {data:session} = useSession();
    console.log(session?.user.token);


    return (

        <div className= {styles.Banner} onClick={() => {setIndex(index+1)}}>
            <Image src = {imgRotate[index%4]}
            alt='cover'
            priority
            fill = {true}
            objectFit='cover'>
            </Image>

            <div className={styles.BannerText}>
                <h1 className='text-5xl font-bold text-white '>where every event finds its venue</h1>
                <h3 className='text-2xl text-white '>Finding Perfect venue has never been easier. Whatever it's wedding. We can find</h3>
            
            </div>
           
            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30
             absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
             onClick={(e) => {e.stopPropagation(); router.push('/venue'); }}>
                Select Venue             
            </button>

             {
                    session? <div className='z-40 absolute top-5 right-10 font-semibold bg-white p-2 text-2xl'> Welcome {session.user?.name}</div>
                        : null
            }

        </div>


    );
}