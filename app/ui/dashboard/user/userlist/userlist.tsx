import styles from "./userlist.module.scss";
import { IoFilterSharp } from "react-icons/io5";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const UserList = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <div className={styles.header}>
                <span>ORGANIZATION</span>
                <span>
                  <IoFilterSharp />
                </span>
              </div>
            </th>
            <th>
              <div className={styles.header}>
                <span>USERNAME</span>
                <span>
                  <IoFilterSharp />
                </span>
              </div>
            </th>
            <th>
              <div className={styles.header}>
                <span>EMAIL</span>
                <span>
                  <IoFilterSharp />
                </span>
              </div>
            </th>
            <th>
              <div className={styles.header}>
                <span>PHONE&nbsp;NUMBER</span>
                <span>
                  <IoFilterSharp />
                </span>
              </div>
            </th>
            <th>
              <div className={styles.header}>
                <span>DATE JOINED</span>
                <span>
                  <IoFilterSharp />
                </span>
              </div>
            </th>
            <th>
              <div className={styles.header}>
                <span>STATUS</span>
                <span>
                  <IoFilterSharp />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@gmail.com</td>
            <td>08078903721</td>
            <td>May&nbsp;15,&nbsp;2020&nbsp;10:00&nbsp;AM</td>
            <td>
              <span className={`${styles.status} ${styles.inactive}`}>
                Inactive
              </span>
            </td>
            <td>
              <span>
                <IoEllipsisVerticalSharp />
              </span>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@gmail.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>
              <span>
                <IoEllipsisVerticalSharp />
              </span>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@gmail.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className={`${styles.status} ${styles.blackListed}`}>
                Blacklisted
              </span>
            </td>
            <td>
              <span>
                <IoEllipsisVerticalSharp />
              </span>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@gmail.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                Active
              </span>
            </td>
            <td>
              <span>
                <IoEllipsisVerticalSharp />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
