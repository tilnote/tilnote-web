import React from 'react';

const Header = () => {

    const headerStyle = {
        padding: '0 1rem',
        borderBottom: 'solid 1px #eee',
    };

    const containerStyle = {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                <span>tilnote</span>
                <span>Hamburger</span>
            </div>
        </header>
    )
};

export default Header;