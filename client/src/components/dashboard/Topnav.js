"use client"
import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import Link from "next/link";

export default function Topnav({theme, toggleTheme}) {
    const isDark = theme === "dark";
    const [isCollapsed, setIsCollapsed] = useState(false);
    const collapseRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            isCollapsed &&
            collapseRef.current &&
            !collapseRef.current.contains(event.target)
        ) {
            setIsCollapsed(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isCollapsed]);

    return (
        <div>
            <Navbar
                expand="md"
                bg={isDark ? "dark" : "white"}
                variant={isDark ? "dark" : "light"}
                className={`border-bottom ${isDark ? "border-secondary" : "navbar-light"}`}
            >
                <Container fluid>
                <Link href="/">
                    <Navbar.Brand className={`fw-bold ${isDark ? "text-white" : "text-primary"}`}>
                    <img
                        src={isDark ? "/images/logo-inverted.png" : "/images/logo.png"}
                        alt="Devio Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-top me-2"
                    />
                    </Navbar.Brand>
                </Link>

                <div className="d-flex align-items-center justify-content-center gap-2">
                    <Nav.Link href="#" className="text-secondary d-md-block d-none">Developer Docs</Nav.Link>
                    <Nav.Link href="#" className="text-secondary d-md-block d-none">Support</Nav.Link>
                    <Form.Check
                    type="switch"
                    id="dark-mode-toggle"
                    checked={isDark}
                    onChange={toggleTheme}
                    className="ms-3"
                    />
                    <Navbar.Toggle
                    aria-controls="devio-navbar"
                    className="mt-1"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                </div>
                </Container>
            </Navbar>

            {isCollapsed && (
                <div
                ref={collapseRef}
                className={`custom-offcanvas ${isDark ? "bg-dark text-white" : "bg-white text-dark"}`}
                >
                <Nav className="flex-column p-3">
                    <SidebarItems isDark={isDark} theme={theme}/>
                    <Nav.Link href="#" className="text-secondary">Developer Docs</Nav.Link>
                    <Nav.Link href="#" className="text-secondary">Support</Nav.Link>
                    <Form.Check
                    type="switch"
                    id="dark-mode-toggle"
                    checked={isDark}
                    onChange={toggleTheme}
                    className="mt-3"
                    />
                </Nav>
            </div>
        )}
        </div>
    )
}