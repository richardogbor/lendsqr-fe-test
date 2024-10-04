import { title } from "process";
import styles from "./sidebar.module.scss";
import { IoHomeOutline, IoPeople } from "react-icons/io5";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Switch Organization",
    icon: "",
  },
  {
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <IoHomeOutline />,
      },
    ],
  },
  {
    title: "CUSTOMERS",
    list: [
      {
        title: "Users",
        path: "/dashboard/user",
        icon: <IoPeople />,
      },
      {
        title: "Guarantors",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Loans",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Decision Models",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Savings",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Loan Requests",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Whitelist",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Karma",
        path: "",
        icon: <IoHomeOutline />,
      },
    ],
  },
  {
    title: "BUSINESSES",
    list: [
      {
        title: "Organization",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Loan Products",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Savings Products",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Fees and Charges",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Transactions",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Services",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Service Account",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Settlements",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Reports",
        path: "",
        icon: <IoHomeOutline />,
      },
    ],
  },
  {
    title: "SETTINGS",
    list: [
      {
        title: "Preferences",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Fees and Pricing",
        path: "",
        icon: <IoHomeOutline />,
      },
      {
        title: "Audit Logs",
        path: "",
        icon: <IoHomeOutline />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list?.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
