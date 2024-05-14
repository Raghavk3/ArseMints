import Link from "next/link";

export default function Sidebar() {
    return (
        < div >
            <div>
                <p>
                    Name
                </p>
            </div>
            <div >
                <Link href="#">
                    <p>Home</p>
                </Link>
            </div>
            <div >
                <Link href="#">
                    <p>My profile</p>
                </Link>
            </div>
            <div >
                <Link href="#">
                    <p>Chats</p>
                </Link>
            </div>
            <div >
                <Link href="#">
                    <p>help</p>
                </Link>
            </div>
        </div >
    )
}