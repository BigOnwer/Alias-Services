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
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <div className="container max-w-screen-lg">
                    <div className="grid grid-cols-[10rem_1fr] gap-12">
                    <SettingsSidebar />
                    <div>{children}</div>
                    </div>
                </div>
            </DashboardPageMain>
        </DashboardPage>
    )
}