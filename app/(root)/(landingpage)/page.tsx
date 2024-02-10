import { UserButton } from "@clerk/nextjs";
const landingpage = () => {
    return ( 
        <div className="h-full">
            
           
            <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default landingpage;