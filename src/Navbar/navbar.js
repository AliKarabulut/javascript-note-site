import styles from "./navbar.module.css"

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.name}>Javascript D.</div>
        </div>
    )
}

export default Navbar