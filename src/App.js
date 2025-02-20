import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-logo">📚 BookFlo</h1>
        <p className="homepage-tagline">Your Smart AI-powered Booking Companion</p>
      </header>
      <main className="homepage-main">
        <div className="info-card">
          <h2>Manage Your Books & Appointments</h2>
          <p>Effortlessly track and organize your books while scheduling appointments with ease.</p>
        </div>
        <div className="info-card">
          <h2>AI-powered Assistance</h2>
          <p>Get smart recommendations and automation to streamline your workflow.</p>
        </div>
        <div className="homepage-buttons">
          <button className="btn-primary">📅 Book a Slot</button>
          <button className="btn-secondary">📖 Manage Appointments</button>
        </div>
      </main>
    </div>
  );
}

export default App;
