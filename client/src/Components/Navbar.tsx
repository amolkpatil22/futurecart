import styles from "./Navbar.module.css"
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.main}>
                <Link to={"/"} className={`${styles.logo} ${styles.link}`}  >
                    <h3 style={{ color: "white", fontSize: "30px" }}>Future</h3>
                    <h3 style={{ color: "orangered", fontSize: "30px" }}>Cart</h3>
                </Link>

                <Link className={styles.link} to={"/"}><h3>Home</h3></Link>

                <div className={styles.searchContainer} >
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="search"
                        placeholder="Search for Products, Brands and More"
                        className={styles.searchBar}
                    />
                </div>

                <div>
                    <Link className={`${styles.login} ${styles.link}`} to={"/login"} >
                        <CgProfile style={{ fontSize: "x-large" }} />
                        <h3>Login</h3>
                    </Link>
                    <>
                        <ul className={styles.hamberger}>
                            <li >
                                <div>
                                    <h5>New to </h5>
                                </div>
                            </li>
                            <li ><Link to={"/"} style={{ color: "black" }}>my profile</Link></li>
                            <li ><Link to={"/"} style={{ color: "black" }}>my profile</Link></li>
                            <li ><Link to={"/"} style={{ color: "black" }}>my profile</Link></li>
                        </ul>
                    </>
                </div>

                <Link className={styles.link} to={"/cart"} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <FaCartArrowDown style={{ fontSize: "x-large" }} />
                    <h3>Cart</h3>
                </Link>
            </div>
        </div>
    )
}