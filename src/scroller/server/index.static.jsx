import React from 'react';

function renderStyles () {
    if(process.env.NODE_ENV === 'production') {
        return <link rel="stylesheet" href="/scroller.css"/>;
    }
}

function renderScripts() {
    var appCode = <script type="text/javascript" src="/scroller.js"></script>;

    if(process.env.NODE_ENV === 'production') {
        return <div>
            <script type="text/javascript" src="/core.js"></script>
            {appCode}
        </div>;
    } else {
        return appCode;
    }
}

export default (props) => {
    return (
        <html lang="">
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <title>scroller</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
                {renderStyles()}
            </head>
            <body>
                <div id="scroller"></div>
                {renderScripts()}
            </body>
        </html>
    );
}
