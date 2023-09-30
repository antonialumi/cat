import Link from "next/link"
export default function NavigationBar(){
    return (<>
    <div>
        <Link className="grid-item" href="/">Home</Link>
        <Link className="grid-item" href="/about">about</Link>
        <Link className="grid-item" href="/letsgo">Lets go</Link>
    </div>
    </>
    )
}