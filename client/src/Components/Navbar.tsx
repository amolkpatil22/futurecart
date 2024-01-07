import styles from "./Navbar.module.css"
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
    return (
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
            <h3>Profile</h3>
            <h3>Cart</h3>
            <h3>Login</h3>
            <h3>SignUP</h3>
        </div>
    )
}