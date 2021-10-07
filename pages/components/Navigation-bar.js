import styles from "../../styles/Home.module.scss";

const Navbar = () => {
  return (
    <div className="Navigation-bar">
      <div className={styles.navbar}>
        <a href="/">Home</a>
      </div>

      <div className={styles.sidenav}>
        <a href="../Products">List Products</a>
        <a href="#">User</a>
        <a href="#">Cart User</a>
        <br />
        <a href="#contact" style={{ color: "red" }}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
