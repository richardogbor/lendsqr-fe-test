import UserList from "@/app/ui/dashboard/user/userlist/userlist";
import styles from "../../ui/dashboard/user.module.scss";
import Card from "@/app/ui/dashboard/user/card/card";

function UserPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <UserList />
    </div>
  );
}

export default UserPage;
