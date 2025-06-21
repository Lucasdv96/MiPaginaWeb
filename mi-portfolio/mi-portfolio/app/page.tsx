import Image from "next/image";


export default function Page() {
  return(
    <><h1>Hello, Next.js!</h1>
    <Image src="/profile.jpg" alt="Profile" width={500} height={500} /></>
  ); 
}
