import Link from "next/link"
export default function NavigationBar(){
    return (<>
    <div className="navbar">
        <Link className="box" style={{fontSize:'26px'}} href="/">Home</Link>
        <Link className="box" style={{fontSize:'26px'}} href="/about">about</Link>
        <Link className="box" style={{fontSize:'26px'}} href="/letsgo">Lets go</Link>
    </div>
    </>
    )
}