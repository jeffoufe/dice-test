// @flow

import React from 'react';
import { ImportantText, Text } from '../../components/Typography/Typography';
import List from '../../components/List/List';
import styles from './MoreInfo.module.scss';
import buildPrice from '../../utils/buildPrice';

import type { Ticket } from '../../models/Ticket';
import type { LineUp, LineUpEntry } from '../../models/LineUp';

type MoreInfoProps = {
    description: string,
    lineup: LineUp,
    ticket_types: Array<Ticket>,
    currency: string
};

const MoreInfo = ({ description, lineup, ticket_types, currency }: MoreInfoProps) => {
    const lineupList = lineup.map((lineupEntry: LineUpEntry) => ({
        primary: lineupEntry.details,
        secondary: lineupEntry.time
    }));

    const ticketsList = ticket_types.map((ticket: Ticket) => ({
        primary: ticket.name,
        secondary: buildPrice(currency, ticket.price.total, 2),
        tertiary: ticket['sold_out']
    }));

    return (
        <div className={styles.container}>
            <ImportantText>
                More info
                <div className={styles.expand}>+</div>
            </ImportantText>
            <Text className={styles.description}>{description}</Text>
            <List title='line up' list={lineupList} />
            <List title='tickets' list={ticketsList} />
        </div>
    );
};

export default MoreInfo