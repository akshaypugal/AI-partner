import { UserButton } from "@clerk/nextjs";
const landingpage = () => {
    return ( 
        <div>
            landing(unprotected)
            <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default landingpage;