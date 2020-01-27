import React from 'react';

class Place extends React.Component {

    state = {
        place: {}
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`http://localhost:4000/api/getmainplacebyname/${name}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ place: r[0] }))
    }

    render() {
        const { place } = this.state;
        return (
            <section>
                {place.name !== '' &&
                    <div>
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
                    </div>
                }
            </section>
        );
    }
}

export default Place;
