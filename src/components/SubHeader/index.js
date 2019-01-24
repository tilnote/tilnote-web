import React, { Component } from 'react';
import { Dropdown, Button, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import * as styles from './styles';

class SubHeader extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div style={styles.subHeaderStyle}>
                <div style={styles.containerStyle}>
                    <CategoryDropDown />
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
            path: 'All',
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

    setPath = (path) => {
        this.setState({ path });
    }

    render() {
        return (
            <Dropdown text={this.state.path}>
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
                <Icon name='write' size='large' />
            </Button>
        )
    }
}

export default SubHeader;
export { CategoryDropDown, WriteButton }

