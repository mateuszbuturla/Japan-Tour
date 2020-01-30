import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './adminLogin.sass';

class AdminLogin extends React.Component {

    state = {
        login: '',
        password: '',
        user: undefined,
        message: '',
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitLoginForm(e) {
        e.preventDefault();
        const { login, password } = this.state;

        try {
            fetch(`${this.props.config.api}/api/login/${login}/${password}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.status === 'correct') {
                        const cookies = new Cookies();
                        cookies.set('user', r.user, { maxAge: 9000 });
                        this.getCookie()
                    }
                    else if (r.status === 'incorrect') {
                        this.setState({ message: 'Nie prawidłowe dane logowania' })
                    }
                })
        }
        catch {
            this.setState({ message: 'Wystąpił problem spróbuj ponownie później' })
        }
    }

    getCookie() {
        const cookies = new Cookies();
        this.setState({ user: cookies.get('user') })
    }

    componentDidMount() {
        this.getCookie();
    }

    render() {
        const { login, password, message, user } = this.state;

        return (
            <>
                {user !== undefined && <Redirect to="/adminpanel/mainplaces" />}
                <section className="login-form">
                    <div className="login-form__container">
                        {message !== '' &&
                            <div className="message">
                                <p>{message}</p>
                            </div>
                        }
                        <form onSubmit={this.submitLoginForm.bind(this)}>
                            <input
                                type="text"
                                id="login"
                                className="login-form__input"
                                placeholder="Login"
                                onChange={this.handleInputChange.bind(this)}
                                value={login}
                            /><br />

                            <input
                                type="password"
                                id="password"
                                className="login-form__input"
                                placeholder="Hasło"
                                onChange={this.handleInputChange.bind(this)}
                                value={password}
                            /> <br />

                            <input
                                type="submit"
                                value="Zaloguj"
                                className="login-form__submit-input"
                            />
                        </form>
                    </div>
                </section>
            </>
        );
    }
}

export default AdminLogin;
