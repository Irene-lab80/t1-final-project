import style from "./NavList.module.css";
import { HashLink as Link } from "react-router-hash-link";

interface IProps {
  children: React.ReactNode;
}

export const NavList = ({ children }: IProps): JSX.Element => {
  return (
    <nav>
      <ul className={style.navList}>{children}</ul>
    </nav>
  );
};

interface IPropsItem {
  children: React.ReactNode;
  link?: string;
}

export const NavItem = ({ children, link }: IPropsItem): JSX.Element => {
  return (
    <li className={style.navItem}>
      {link ? (
        <Link className={style.link} to={link}>
          {children}
        </Link>
      ) : (
        <span className={style.link}>{children}</span>
      )}
    </li>
  );
};

NavList.Item = NavItem;
