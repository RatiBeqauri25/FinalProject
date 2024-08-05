import Link from "next/link"

const notFound = () => {
    return (
        <div className="pagenotfounddiv">
           <h1> Oops... Page Not Found go back to the <Link href="/" className="PageNotFound"><b>Main page</b></Link></h1>
        </div>
    )
}

export default notFound