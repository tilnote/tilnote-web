import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

import * as styles from './styles';

const Header = () => (
    <header style={styles.headerStyle}>
        <div style={styles.containerStyle}>
            <span><strong>TILNote</strong></span>
            <Button style={styles.buttonStyle} icon>
                <Icon name='bars' size='large' />
            </Button>
        </div>
    </header>
)

export default Header;