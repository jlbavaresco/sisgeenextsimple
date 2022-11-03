import Link from 'next/link'

const Menu = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">            
            <Link className="navbar-brand" aria-current="page" href="/">SISGEE</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">                       
                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                     
                        <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Exemplos</Link>                        
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            
                            <li><Link className="dropdown-item" href="/componentes/SSG">SSG</Link></li>
                            <li><Link className="dropdown-item" href="/componentes/ISR">ISR</Link></li>
                            <li><Link className="dropdown-item" href="/componentes/SSR">SSR</Link></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
);

export default Menu;