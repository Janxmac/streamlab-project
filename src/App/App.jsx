import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { HeadControl, FooterControl, PrivateRoute, LoginModal} from '../_components';
import { HomePage } from '../HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div className="h-100 d-flex flex-column">

                    <HeadControl/>

                    <div className="page-wrap flex-fill">
                        <Route exact path="/" component={HomePage} />
                    </div>

                    <FooterControl/>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };