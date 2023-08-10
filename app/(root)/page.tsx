import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-slate-50'>
      <div>
        <Button>Yeppers</Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
