import React, { Component } from 'react';
import CategoryDropDown from '../CategoryDropDown';

const subHeaderStyle = {
    padding: '0 1rem',
    borderBottom: 'solid 1px #eee',
    boxShadow: '0 1px 2px 0px #D6D6D6'
};

const containerStyle = {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40
};

class SubHeader extends Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div style={subHeaderStyle}>
                <div style={containerStyle}>
                    <CategoryDropDown />
                    <span>New note</span>
                </div>
            </div>
        );
    }
}

export default SubHeader;