// @flow

import React, { useState } from 'react';
import { ImportantText, Text } from '../../components/Typography/Typography';
import List from '../../components/List/List';
import styles from './MoreInfo.module.scss';
import buildPrice from '../../utils/buildPrice';

import type { Ticket } from '../../models/Ticket';
import type { LineUp, LineUpEntry } from '../../models/LineUp';

type MoreInfoProps = {
    description: string,
    featured: boolean,
    lineup: LineUp,
    ticket_types: Array<Ticket>,
    currency: string
};

const MoreInfo = ({ description, lineup, ticket_types, currency, featured }: MoreInfoProps) => {
    const [isOpen, setIsOpen] = useState(featured);

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
        <div className={styles[isOpen ? 'more-info-container-open' : 'more-info-container']}>
            <ImportantText>
                More info
                <div className={styles['more-info-expand']} onClick={() => setIsOpen(!isOpen)}>+</div>
            </ImportantText>
            <Text className={styles['more-info-description']}>{description}</Text>
            <List title='line up' list={lineupList} />
            <List title='tickets' list={ticketsList} />
        </div>
    );
};

export default MoreInfo