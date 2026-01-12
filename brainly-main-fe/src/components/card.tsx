import { DeleteIcon } from "../icon/deleteIcon";
import { ShareIcon } from "../icon/shareIcon";

interface CardProps{
    title: string
    link: string 
    type: "youtube" | "twitter"
}
export function Card(props: CardProps){
    let vidId;
    if(props.link.includes("v=")){
        vidId=props.link.split("v=")[1]?.split("&")[0];
    }
    if(props.link.includes("youtu.be/")){
        vidId=props.link.split("youtu.be/")[1]?.split("?")[0];
    }

    return <div className="p-8 bg-white rounded-md max-w-76 border-gray-100 border shadow-sm">
        <div className="flex items-center justify-between ">
            <div >   
                <p className="text-sm ">{props.title}</p>
            </div>
            <div  className="flex">
                <div className="pr-2 text-gray-400">
                    <a href={props.link} target="_blank"></a>
                    <ShareIcon/> 
                </div>
                <div className="pr-2 text-gray-400">
                    <DeleteIcon/>
                </div>
            </div>
        </div>
        <div className="pt-4">
            
            {props.type ==="youtube" && <iframe className="w-full" src={`https://www.youtube.com/embed/${vidId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
             


        {props.type==="twitter" && <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a> 
        </blockquote>}

        </div>
    </div>
}