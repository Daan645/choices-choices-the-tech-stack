import "../../styles/header.css"; 
export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <figure>
          <img width="93px" alt="veronica logo" src="../img/veronica-logo.svg" />
        </figure>
        <nav>
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/">Ontdek</a></li>
            <li><a href="/">Radio</a></li>
          </ol>
        </nav>
      </div>
      <div className="header-right">
      </div>
    </header>
  );
}

