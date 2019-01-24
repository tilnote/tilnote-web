// import React, { Component } from 'react';
// import { Dropdown } from 'semantic-ui-react'

// export default class CategoryDropDown extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             categories: [{
//                 id: 'test',
//                 text: 'Test',
//                 onPress: this.doTest.bind(this)
//             }, {
//                 id: 'test2',
//                 text: 'Test2',
//                 onPress: this.doTest.bind(this)
//             }],
//         }
//     }

//     doTest = () => {
//         console.log('test')
//     }

//     render() {
//         return (
//             <Dropdown text='All'>
//                 <Dropdown.Menu>
//                     <Dropdown.Item text='All' />
//                     {this.state.categories.slice()
//                         .map(item =>
//                             <Dropdown.item key={item.id}
//                                 text={item.text}
//                                 onPress={item.onPress}
//                             />
//                         )}
//                 </Dropdown.Menu>
//             </Dropdown>
//         );
//     }
// }

import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class CategoryDropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [{
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
            <Dropdown text='All'>
                <Dropdown.Menu>
                    <Dropdown.Item text='All' />
                    {this.state.categories.slice()
                        .map(item =>
                            <Dropdown.Item key={item.id} text={item.text} onClick={item.onClick} />
                        )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}