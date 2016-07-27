import React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import * as actions from 'app/actions/actions';

export class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='Main'>
                Main Component
            </div>
        );
    }

}

export default connect()(Main);

