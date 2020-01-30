import React from 'react';
import { Link } from 'react-router-dom';

import './nav.sass';

class Nav extends React.Component {

    state = {
        onTop: true,
        mobileNavOpen: false,
        mainPlaces: []
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({ onTop: window.scrollY === 0 })
        });

        try {
            fetch(`${this.props.config.api}/api/getmainposition`, { method: 'POST' })
                .then(r => r.json())
                .then(r => this.setState({ mainPlaces: r }))
        }
        catch {

        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    burgerMenuButton() {
        const { mobileNavOpen } = this.state;
        this.setState({ mobileNavOpen: !mobileNavOpen })
    }

    render() {
        const { onTop, mobileNavOpen, mainPlaces } = this.state;
        const mainPlacesLinks = mainPlaces.map(mainPlace => <Link key={mainPlace._id} className="nav__reset" to={`/${mainPlace.name}`}>
            <li className="nav__link">
                <a className="nav__submenu-link-a">{mainPlace.name}</a>
            </li>
        </Link>)
        return (
            <nav className={`nav ${onTop === false ? 'nav--top' : ''} ${mobileNavOpen === true ? ' nav--open' : ''}`}>
                <div className="nav__logo">
                    <a className="nav__logo-a">Japan tour</a>
                    <div className="nav__mobile-button" onClick={this.burgerMenuButton.bind(this)}></div>
                </div>
                <ul className="nav__link-list">
                    <Link className="nav__reset" to={`/`}><li className="nav__link"><a>Strona główna</a></li></Link>
                    <li className="nav__link"><a>Co warto zobaczyć?</a>
                        <ul className="nav__submenu-link-list">
                            {mainPlacesLinks}
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;