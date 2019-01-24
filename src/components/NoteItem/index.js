import React, { Component } from 'react';
import * as styles from './styles';

class NoteItem extends Component {

    render() {
        return (
            <div style={styles.itemContainer}>
                {this.props.text}
            </div>
        );
    }
}

export default NoteItem;