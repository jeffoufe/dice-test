// @flow

import React from 'react';
import styles from './List.module.scss';
import { BlueHeader, ImportantText, Text, GreyHeader } from '../../components/Typography/Typography';

type ListEntryProps = {
    primary: string,
    secondary?: string,
    tertiary?: boolean
};

type ListProps = {
    list: Array<ListEntryProps>,
    title: string
}

const List = ({ list, title }: ListProps) => (
    <div>
        <BlueHeader>{title}</BlueHeader>
        {list.map(({ primary, secondary, tertiary }: ListEntryProps, index: number) => (
            <div className={styles['list-entry']} key={`list-entry-${index}`}>
                <Text inline>{primary}</Text>
                {secondary && <ImportantText inline> &#65293; {secondary}</ImportantText>}
                {tertiary && <GreyHeader inline> Sold out</GreyHeader>}
            </div>
        ))}
    </div>
)

export default List;