import './App.css';
import logo from './logo.svg';

function Header() {
    return (
    <header>
        <nav>
            <img src={logo} width="100px" />
        </nav>
    </header>
    )
}

function MainContent() {
    return(
    <>
    <h1>
        My list
    </h1>
    <ul>
        <li>Sick</li>
        <li>Awesome</li>
        <li>Cool</li>
    </ul>
    </>
    )
}

function Footer() {
    return(
        <footer>
            "copyright. Thomas Gonzales development. All rights reserved."
        </footer>
    )
}

function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

export default App;
