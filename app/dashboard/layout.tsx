import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topnav}>
        <Navbar />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
