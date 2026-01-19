import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return(
    <main className="not-found" aria-labelledby="nf-title">
      <h1 id="nf-title" className="not-found__title">404 — Page not found</h1>
      <p className="not-found__lede">The page you're looking for has vanished like a shy cryptid.</p>

      <div className="not-found__actions">
        <button className="btn btn--ghost" onClick={() => navigate(-1)}>Go back</button>
        <Link className="btn btn--primary" to="/">Go to Home</Link>
        <Link className="btn btn--warm" to="/about">About Cryptid Quest</Link>
      </div>

      <div className="not-found__hint">
        <p>Tip: Check the URL or use the navigation above.</p>
      </div>
    </main>
  );
}


