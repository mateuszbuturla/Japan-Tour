import React from 'react';

class Place extends React.Component {

    state = {
        place: {},
        err: false,
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`http://localhost:4000/api/getmainplacebyname/${name}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                if (r.length === 0)
                    this.setState({ err: true })
                else
                    this.setState({ place: r[0] })
            })
    }

    render() {
        const { place, err } = this.state;
        return (
            <section>
                {place.name !== '' &&
                    <div>
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
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
