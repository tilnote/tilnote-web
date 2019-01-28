import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Dropdown, Button, Icon } from 'semantic-ui-react'

import * as styles from './styles';

class SubHeader extends Component {

    render() {
        return (
            <div style={styles.subHeaderStyle}>
                <div style={styles.containerStyle}>
                    <CategoryDropDown location={this.props.location} />
                    <WriteButton />
                </div>
            </div>
        );
    }
}

class CategoryDropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            path: this.getLastPath(props.location.pathname),
            categories: [{
                id: 'all',
                text: 'All',
                onClick: this.setPath.bind(this, 'All')
            }, {
                id: 'test',
                text: 'Test',
                onClick: this.setPath.bind(this, 'Test')
            }, {
                id: 'test2',
                text: 'Test2',
                onClick: this.setPath.bind(this, 'Test2')
            }],
        }
    }

    getLastPath = (pathname) => {
        return pathname.split('/').pop();
    }

    setPath = (path) => {
        this.setState({ path });
    }

    render() {
        return (
            <Dropdown text={this.state.path} style={{textTransform: 'capitalize'}}>
                <Dropdown.Menu>
                    {this.state.categories.slice()
                        .map(item =>
                            <Dropdown.Item
                                key={item.id} text={item.text} onClick={item.onClick}
                                as={NavLink} to={{ pathname: `/notes/${item.id}` }}
                            />
                        )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

class WriteButton extends Component {

    doTest = (e) => {
        console.log('e:', e);
    }

    render() {
        return (
            <Button style={styles.buttonStyle} icon onClick={this.doTest}>
                <Icon name='write square' size='large' />
            </Button>
        )
    }
}

export default withRouter(SubHeader);
export { CategoryDropDown, WriteButton }

