import React from 'react';
import {Link} from 'react-router';
import {Story} from './Story';

export default (props) => {
    var storyProps = {
        height: 3000
    }
    return <div>
        <h1>scroller</h1>
        <Story height={100000}/>
        <Link to="/">Main Page</Link>
        <Link to="/other">Other Page</Link>
        {props.children}
    </div>
}
