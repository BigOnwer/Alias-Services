import { SidebarSettings } from '../components/SidebarSettings'
import { ThemeForm } from './components/ThemeForm'

export default function Page() {
  return (
    <div>
        <SidebarSettings currentPage='theme'/>
        <ThemeForm />
    </div>
)
}