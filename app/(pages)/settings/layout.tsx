import { PropsWithChildren } from 'react'
import { getCurrentUser } from '@/lib/session'
import { MainSidebar } from '@/components/MainSidebar'

export default async function Layout({ children }: PropsWithChildren) {
  const user = await getCurrentUser()

  return (
    <div className="flex ">
      <MainSidebar user={user}/>
      <main>{children}</main>
    </div>
  )
}