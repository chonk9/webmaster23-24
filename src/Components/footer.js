import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function navbar(){
    const pathname = window.location.pathname
    return( <nav className="nav">
        <Link to = "/" className = "site-title">Green Guardians</Link>
        <ul>
            <CustomLink to = "/clean-solutions">Clean Solutions</CustomLink>
            <CustomLink to = "/tax-incentives">Tax Incentives</CustomLink>
            <CustomLink to = "/about-us">About Us</CustomLink>
        </ul>
    </nav>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <Link to = {to} {...props}>
            <li className = {isActive ? "active" : ""}>
                {children}
            </li>
        </Link>
    )
}