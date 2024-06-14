'use client'
import { useRouter } from 'next/navigation';


export default function Home() {
  const rouer = useRouter();
  const navi = (name) => {
    rouer.push(name)
  }
  return (
    <main>
      <h1>THIS IS THE HOME Page</h1>                                                                                                                                           
    </main>
  );
}
