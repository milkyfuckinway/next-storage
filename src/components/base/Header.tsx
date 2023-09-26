'use client';

import clsx from 'clsx';
import Link from 'next/link';

import ChangeThemeButton from '../ChangeThemeButton';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <section className={clsx('section', styles.section)}>
        <div className={clsx('container', styles.container)}>
          <nav className={styles.nav}>
            <Link href="/">Главная</Link>
          </nav>
          <ChangeThemeButton />
        </div>
      </section>
    </header>
  );
}

export default Header;
