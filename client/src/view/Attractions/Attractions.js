import React from 'react';

import './place.sass';

import Attraction from './Attraction/Attraction';
import NoMatch from '../NoMatch/NoMatch';

import config from '../../config';

class Attractions extends React.Component {

    state = {
        mainPlace: {},
        err: false,
        attractions: [],
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`${config.api}/api/getmainplacebyname/${name}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                if (r.length === 0)
                    this.setState({ err: true })
                else {
                    this.setState({ mainPlace: r[0] })
                    fetch(`${config.api}/api/getattractionbymainplaceid/${r[0]._id}`, { method: 'POST' })
                        .then(r => r.json())
                        .then(r => {
                            this.setState({ attractions: r })
                        })
                }
            })
    }

    render() {
        const { mainPlace, err, attractions } = this.state;
        const _attractions = attractions.map(attraction => <Attraction name={attraction.name} imgsrc={attraction.imgsrc} description={attraction.description} key={attraction._id} />)

        const bgUrl = ` ${process.env.PUBLIC_URL + '/upload/' + `${mainPlace.imgsrc}`}`;

        let mainPlaceName1 = '';
        let mainPlaceName2 = '';

        if (mainPlace.name !== undefined) {
            mainPlaceName1 = mainPlace.name.slice(0, Math.floor(mainPlace.name.length / 2));
            mainPlaceName2 = mainPlace.name.slice(Math.floor(mainPlace.name.length / 2), mainPlace.name.length);
        }

        return (
            <>
                {err === true ?
                    <NoMatch />
                    :
                    <>
                        <header className="attractions-header" style={{ background: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url(${bgUrl}) fixed` }}>
                            <h2 className="attractions-header__h2">
                                {mainPlace.name}
                            </h2>
                        </header>
                        <section className="attractions">
                            {mainPlace.name !== '' &&
                                <>
                                    <div className="section-header">
                                        <h2 className="section-header__h2">{mainPlaceName1}<span className="pink">{mainPlaceName2}</span></h2>
                                        <hr className="section-header__line" />
                                        <p className="section-header__description">{mainPlace.description}</p>
                                    </div>
                                    <div className="attractions-container">
                                        {_attractions}
                                    </div>
                                </>
                            }
                        </section>
                    </>
                }

            </>
        );
    }
}

export default Attractions;
