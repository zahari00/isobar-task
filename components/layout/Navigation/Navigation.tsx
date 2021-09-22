import css from "./Navigation.module.css";
import Link from 'next/link'

export const Navigation = () => {
  return (
    <header className={css.navigation}>
      <nav className="container">
        <Link href="/" passHref>
          <a className={css.logo}>
            <h1>NEWS</h1>
          </a>
        </Link>
      </nav>
    </header>
  );
};
