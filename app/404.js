import Link from "next/link";
const NotFound = () => {
    return ( 

        <div>
            <h1>This page not Found</h1>
            <h2>Move Back to <Link href="/">HomePage</Link></h2>
        </div>
     );
}
 
export default NotFound
