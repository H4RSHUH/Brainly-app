import { Logo } from "../icon/logo";
import { TwitterIcon } from "../icon/twitterIcon";
import { YoutubeIcon } from "../icon/youtubeIcon";
import { SidebarItem } from "./sidebarItem";

  export function Sidebar(){
    return <div className="w-64 h-screen fixed left-0 top-0 border-r-2  border-gray-300">
        <div className="text-2xl pt-4 flex items-center">
            <div className="pl-2 pr-1">
                <Logo/> 
            </div>
            
            Brainly </div>
                
    <div className="pt-4 pl-4">
        <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
        <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
    </div>
    </div>
  }