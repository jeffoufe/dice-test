// @flow

import React from 'react';
import styles from './PlayButton.module.scss';

const PlayButton = () => (
    <div className={styles['play-container']}>
        <div className={styles['play-button']}>&#9658;</div>
    </div>
)

export default PlayButton;