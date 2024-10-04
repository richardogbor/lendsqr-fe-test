"use client";
import Link from "next/link";
import styles from "./menuLink.module.scss";
import { usePathname } from "next/navigation";

const MenuLink = ({
  item,
}: {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
}) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      key={item.title}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
