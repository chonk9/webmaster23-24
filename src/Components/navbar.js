import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useEffect, useCallback, useRef } from "react";
import classNames from "classnames";
import "./yunggravy.css";
import logo from "./logo.png";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const btnRef = useRef();
    const toggle = useCallback(() => {
        // Prevents scrolling when sidebar is open
        if (sidebar) {
            window.onscroll = function () {};
        } else if (!sidebar) {
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function () {
                window.scrollTo(x, y);
            };
        }
        setSidebar(!sidebar);
    }, [sidebar]);
    useEffect(() => {
        // Closes sidebar when escape key is pressed
        const keyPress = (e) => {
            if (e.key === "Escape" && sidebar) toggle();
        };
        document.addEventListener("keydown", keyPress, false);

        return () => {
            document.removeEventListener("keydown", keyPress, false);
        };
    }, [toggle, sidebar]);
    useEffect(() => {
        // Closes dropdown when clicking outside of it
        const closeDropdown = (e) => {
            if (
                e.target &&
                !e.target.contains(btnRef.current) &&
                e.target.className !== "dropdown-links"
            )
                setDropdown(false);
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, [dropdown]);
    return (
        <>
            <div
                className={classNames("tint", { "active-tint": sidebar })}
                onClick={toggle}
            />
            <div className={classNames("sidebar", { active: sidebar })}>
                <ul className="sidebar-links">
                    <CustomLink to="/clean-solutions">Solutions </CustomLink>

                    <li>
                        <hr />
                    </li>
                    <CustomLink to="/tax-incentives">Tax</CustomLink>
                </ul>
            </div>
            <div
                className={classNames("sidecover", {
                    "sidecover-active": sidebar,
                })}
            />
            <nav>
                <Link to="/" className="site-title">
                    <img
                        className="logo"
                        height="50"
                        width="100"
                        src={logo}
                    ></img>
                </Link>
                <div className="nav-container">
                    <div className="nav-link-center">
                        <ul className="nav-links">
                            <CustomLink to="/about-us">About Us</CustomLink>
                        </ul>
                    </div>
                    <button
                        className={classNames("burger", {
                            "active-burger": sidebar,
                        })}
                        onClick={toggle}
                        aria-label="Access sidebar"
                    >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </button>
                </div>
            </nav>
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        // <Link to={to} {...props}>
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
