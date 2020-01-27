import React from 'react';

import './place.sass';

import Location from './Location/Location';

class Place extends React.Component {

    state = {
        place: {},
        err: false,
        locations: [],
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`http://localhost:4000/api/getmainplacebyname/${name}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                if (r.length === 0)
                    this.setState({ err: true })
                else {
                    this.setState({ place: r[0] })
                    fetch(`http://localhost:4000/api/getplacebyparentplaceid/${r[0]._id}`, { method: 'POST' })
                        .then(r => r.json())
                        .then(r => {
                            this.setState({ locations: r })
                        })
                }
            })
    }

    render() {
        const { place, err, locations } = this.state;
        const _Locations = locations.map(location => <Location name={location.name} imgsrc={location.imgsrc} description={location.description} key={location._id} />)

        const bgUrl = ` ${process.env.PUBLIC_URL + '/upload/' + `${place.imgsrc}`}`;

        let placeName1 = '';
        let placeName2 = '';

        if (place.name !== undefined) {
            placeName1 = place.name.slice(0, Math.floor(place.name.length / 2));
            placeName2 = place.name.slice(Math.floor(place.name.length / 2), place.name.length);
        }

        return (
            <>
                <header className="place-header" style={{ background: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url(${bgUrl})` }}>
                    <h2 className="place-header__h2">
                        {place.name}
                    </h2>
                </header>
                <section className="place">
                    {place.name !== '' &&
                        <>
                            <div className="section-header">
                                <h2 className="section-header__h2">{placeName1}<span className="pink">{placeName2}</span></h2>
                                <hr className="section-header__line" />
                                <p className="section-header__description">{place.description}</p>
                            </div>
                            <div className="place__location-container">
                                {_Locations}
                            </div>
                        </>
                    }
                    {err === true &&
                        <div>
                            <h2>404</h2>
                        </div>
                    }
                </section>
            </>
        );
    }
}

export default Place;
