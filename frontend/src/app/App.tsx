import { ArrowUpRight } from 'lucide-react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';

export function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        К содержимому
      </a>
      <header className="site-header container">
        <Link className="brand" to="/" aria-label="PolEvent — главная">
          <img src="/favicon.svg" alt="" width="36" height="36" />
          <span>
            pol<span>event</span>
            <i aria-hidden="true">↗</i>
          </span>
        </Link>
        <nav aria-label="Основная навигация">
          <NavLink to="/" end>
            Главная
          </NavLink>
          <NavLink to="/about">О сервисе</NavLink>
        </nav>
        <a className="campus-link" href="https://www.ystu.ru/" target="_blank" rel="noreferrer">
          КАМПУС ЯГТУ
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>
      <div id="main-content" tabIndex={-1}>
        <Routes>
          <Route
            path="/"
            element={
              <main className="container welcome-page">
                <div className="eyebrow">ВНЕУЧЕБНАЯ ЖИЗНЬ ЯГТУ</div>
                <h1>
                  Вне пар.
                  <br />
                  <span>Внутри кампуса.</span>
                </h1>
                <p>
                  Встречи, открытия и свои люди — всё рядом. PolEvent объединяет внеучебную жизнь
                  университета в одном месте.
                </p>
                <Link className="button" to="/about">
                  О сервисе
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </main>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <main className="container detail-page">
                <h1>Страница не найдена</h1>
                <Link className="text-link" to="/">
                  На главную
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
      <footer className="site-footer container">
        <Link className="footer-brand" to="/">
          polevent<span aria-hidden="true">↗</span>
        </Link>
        <span>Жизнь между парами.</span>
        <span className="footer-campus">Ярославский государственный технический университет</span>
      </footer>
    </div>
  );
}
