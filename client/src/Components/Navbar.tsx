import styles from "./Navbar.module.css"
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.main}>
                <div className={styles.logo} >
                    <h3 style={{ color: "white", fontSize: "30px" }}>Future</h3>
                    <h3 style={{ color: "orangered", fontSize: "30px" }}>Cart</h3>
                </div>
                <h3>Home</h3>
                <div className={styles.searchContainer} >
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="search"
                        placeholder="Search for Products, Brands and More"
                        className={styles.searchBar}
                    />
                </div>

                <div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <CgProfile style={{ fontSize: "x-large" }} />
                        <h3>Login</h3>
                    </div>
                    <>
                        <ul style={{ position: "absolute" }}>
                            <li >my profile</li>
                            <li >my profile</li>
                            <li >my profile</li>
                            <li >my profile</li>
                        </ul>
                    </>
                </div>

                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <FaCartArrowDown style={{ fontSize: "x-large" }} />
                    <h3>Cart</h3>
                </div>
            </div>
        </div>
    )
}