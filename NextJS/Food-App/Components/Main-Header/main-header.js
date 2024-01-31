import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/Components/Main-Header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackGround from "./main-header-background";
import NavLink from "../Nav-Link/nav-link";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate of food" priority />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Go to Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
