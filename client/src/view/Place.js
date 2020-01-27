import React from 'react';

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
        const _Locations = locations.map(location => <Location name={location.name} imgsrc={location.imgsrc} description={location.description} />)
        return (
            <section>
                {place.name !== '' &&
                    <div>
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
                        {_Locations}
                    </div>
                }
                {err === true &&
                    <div>
                        <h2>404</h2>
                    </div>
                }
            </section>
        );
    }
}

export default Place;
