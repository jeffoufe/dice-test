// @flow

import React from 'react';
import styles from './OnSaleDate.module.scss';
import moment from 'moment';

type OnSaleDateProps = {
    date: string
}

const OnSaleDate = ({ date }: OnSaleDateProps) => (
    <div className={styles['on-sale-container']}>
        <div className={styles['on-sale-date']}>
            {`On sale ${moment(date).format('D MMM LT')}`}
        </div>
    </div>
)

export default OnSaleDate;