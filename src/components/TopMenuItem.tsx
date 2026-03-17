import Link from "next/link";

export default function TopMenuItem({pageRef , title} : {pageRef:string , title:string}){
    return(

        <Link href={pageRef} className=" w-[120px] text-center font-sans text-base text-black">
            {title}
        </Link>


    );
}