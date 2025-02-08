import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/" className="logo">TONOMAT</a>

                <ul className="nav-links">
                    <li><a href="/">Главная</a></li>
                    <li><a href="/login">Вход</a></li>
                    <li><a href="/signup">Регистрация</a></li>
                    <li><a href="/payouts">Выплаты</a></li>
                    <li><a href="/contact">Контакты</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;