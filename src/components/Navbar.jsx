import reactLogo from '/src/assets/react.svg'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className='nav__logo'>
                    <img className='logo' src={ reactLogo } alt="React Logo" />
                    <h3>ReactFacts</h3>
                </div>
                <div className='nav__title'>
                    <p>React Course - Project 1</p>
                </div>
            </nav>
        </header>
    )
}