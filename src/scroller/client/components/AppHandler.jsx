import React from 'react';
import {Link} from 'react-router';


export default (props) => {
    var storyProps = {
        height: 3000
    }
    return <div>
        {props.children}
    </div>
}
