import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {<h2>{props.subtitle}</h2> && props.subtitle}
    </div>
)

export default Header;