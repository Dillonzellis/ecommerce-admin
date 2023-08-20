import NavBar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeid: string }
}) {

  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeid,
      userId
    }
  })

  if (!store) {
    redirect('/')
  }


  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
