import styles from "./card.module.scss";
import { HiOutlineUsers } from "react-icons/hi";

const Card = () => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <HiOutlineUsers size={22} />
      </span>
      <span className={styles.title}>USERS</span>
      <span className={styles.figures}>2,453</span>
    </div>
  );
};

export default Card;
