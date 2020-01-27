import React from 'react';

import MainPlace from './mainPlace/MainPlace';

class Home extends React.Component {

    state = {
        mainPlaces: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/getmainposition', { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ mainPlaces: r }))
    }

    render() {
        const { mainPlaces } = this.state;
        const _mainPlaces = mainPlaces.map(mainPlace => <MainPlace name={mainPlace.name} imgsrc={mainPlace.imgsrc} />)

        return (
            <section>
                {_mainPlaces}
            </section>
        );
    }
}

export default Home;
