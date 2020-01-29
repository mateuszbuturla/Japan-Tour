import React from 'react';

import './home.sass';

import MainPlace from './mainPlace/MainPlace';

class Home extends React.Component {

    state = {
        mainPlaces: []
    }

    componentDidMount() {
        fetch(`${this.props.config.api}/api/getmainposition`, { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ mainPlaces: r }))
    }

    render() {
        const { mainPlaces } = this.state;
        const _mainPlaces = mainPlaces.map(mainPlace => <MainPlace name={mainPlace.name} imgsrc={mainPlace.imgsrc} />)

        return (
            <>
                <header className="home-header">
                    <div className="home-header__container">
                        <h1 className="home-header__h1">Japonia</h1>
                        <p className="home-header__p">Co warto zobaczyć?</p>
                    </div>
                </header>
                <section className="home">
                    <div className="section-header">
                        <h2 className="section-header__h2">Ruszaj <span className="pink">w drogę</span></h2>
                        <hr className="section-header__line" />
                        <p className="section-header__description">Czytasz jeden z nielicznych przewodników po Japonii. Pokarzemy ci gdzie pojechać i co warto zobaczyć w Japonii.</p>
                    </div>
                    <div className="home__main-place-container">
                        {_mainPlaces}
                    </div>
                </section>
            </>
        );
    }
}

export default Home;
