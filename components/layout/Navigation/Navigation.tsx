import Link from 'next/link'
import { RefreshIcon } from "@components/ui/RefreshIcon";
import { useRefetch } from "@context";
import css from "./Navigation.module.css";
import cn from 'classnames'

export const Navigation = () => {
  const refresh = useRefetch();
  return (
    <header className={css.navigation}>
      <nav className={cn(['container', css.wrapper])}>
        <Link href="/" passHref>
          <a className={css.logo}>
            <h1>NEWS</h1>
          </a>
        </Link>
        <button onClick={refresh} className={css.refreshButton}>
          <RefreshIcon />
          Refresh
        </button>
      </nav>
    </header>
  );
};
