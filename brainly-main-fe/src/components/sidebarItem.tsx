import type { ReactElement } from "react"

 export function SidebarItem({text, icon}:{
    text: string
    icon: ReactElement
 }){
     return <div className="flex text-gray-700 items-center pl-6 py-2 cursor-pointer transition-all hover:text-gray-400">
        <div className="pr-2">
            {icon} 
        </div>  
        <div className="">
            {text} 
        </div>
     </div>
 }