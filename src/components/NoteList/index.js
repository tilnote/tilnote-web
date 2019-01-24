import React, { Component } from 'react';
import NodeItem from '../NoteItem';
import * as styles from './styles';

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 'test',
                text: 'Test',
                onClick: this.doTest.bind(this, 'test')
            }, {
                id: 'test2',
                text: 'Test2',
                onClick: this.doTest.bind(this, 'test2')
            }],
        }
    }

    doTest = (e) => {
        console.log('e:', e);
    }

    render() {
        return (
            <div style={styles.container}> 
                {this.state.items.slice()
                    .map(item =>
                        <NodeItem key={item.id} text={item.text} onClick={item.onClick} />
                    )
                }
            </div>
        );
    }
}

export default NoteList;