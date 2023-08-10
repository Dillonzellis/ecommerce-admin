import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex w-full justify-center items-center">
      <SignIn />
    </div>
  )
}
