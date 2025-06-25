// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="container">
          <h1 className="typo-h3">
            <Link to="/">Zeniafy</Link>
          </h1>
        </div>
      </header>

      <main className="layout-main container">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <div className="container">
          <p className="typo-small">© {new Date().getFullYear()} Zeniafy. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
