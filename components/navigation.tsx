import Link from "next/link"
export default function NavigationBar(){
    return (<>
    <div className="navbar">
        <Link className="box" href="/">Home</Link>
        <Link className="box" href="/about">about</Link>
        <Link className="box" href="/letsgo">Lets go</Link>
    </div>
    </>
    )
}