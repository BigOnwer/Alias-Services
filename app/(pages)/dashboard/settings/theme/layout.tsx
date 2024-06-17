import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from '@/components/Dashboard/page'
import { PropsWithChildren } from 'react'
import { SettingsSidebar } from '../components/SettingsSiderbar'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <DashboardPage className=''>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <div className="container max-w-screen-lg">
                    <div>
                        <SettingsSidebar/>
                        <div>{children}</div>
                    </div>
                </div>
            </DashboardPageMain>
        </DashboardPage>
    )
}