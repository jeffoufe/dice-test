// @flow

import React from 'react';
import styles from './EventCard.module.scss';
import PlayButton from '../PlayButton/PlayButton';
import Featured from '../Featured/Featured';
import OnSaleDate from '../OnSaleDate/OnSaleDate';
import MoreInfo from '../MoreInfo/MoreInfo';
import Button from '../Button/Button';
import { Text, ImportantText } from '../Typography/Typography';
import buildPrice from '../../utils/buildPrice';
import moment from 'moment';

import type { LineUp } from '../../models/LineUp';
import type { Ticket } from '../../models/Ticket';

export type EventCardProps = {
    event_images: {
        landscape: string,
        square: string
    },
    apple_music_tracks: Array<Object>,
    spotify_tracks: Array<Object>,
    ticket_types: Array<Ticket>,
    featured: boolean,
    sale_start_date: string,
    date: string,
    name: string,
    venue: string,
    description: string,
    sold_out: boolean,
    url: string,
    lineup: LineUp,
    currency: string,
    location: {
        city: string,
        country: string
    }
}

const EventCard = (props: EventCardProps) => {
    const eventDate = moment(props.date);
    const isNotOnSaleYet = moment(props.sale_start_date).isAfter(moment());

    const sortedTicketTypes = props.ticket_types.sort((ticketA: Ticket, ticketB: Ticket) => ticketA.price.total - ticketB.price.total);
    
    return (
        <div className={styles.container}>
            <div className={styles['image-container']}>
                <img src={props.event_images['square']} className={`${styles.image} ${styles['image-landscape']}`} alt='Event Logo' />
                {!!(props.apple_music_tracks.length || props.spotify_tracks.length) && <PlayButton />}
                {props.featured && <Featured />}
                {isNotOnSaleYet && <OnSaleDate date={props['sale_start_date']} />}
            </div>

            <Text className={styles.date}>
                {eventDate.format('ddd D MMM')} 
                &#65293;
                {eventDate.format('LT')}
            </Text>

            <div className={styles.general}>
                <h2 className={styles.name}>
                    <a href={props.url} target='_blank'>{props.name}</a>
                </h2>
                <ImportantText className={styles.venue}>{props.venue}</ImportantText>
                <Text className={styles.city}>{`${props.location.city}, ${props.location.country}`}</Text>
            </div>

            <MoreInfo {...props} />

            <div className={styles.actions}>
                <Button theme={props['sold_out'] ? 'disabled' : 'blue'}>
                    {props['sold_out'] 
                        ? 'Sold out'
                        : isNotOnSaleYet 
                            ? 'Get reminded' 
                            : 'Book now'
                    }
                </Button>
                <div className={styles.price}>
                    {props.ticket_types.length > 1 && (
                        <div className={styles['price-from']}>
                           From
                        </div>
                    )}
                    <div className={styles['price-value']}>{buildPrice(props.currency, sortedTicketTypes[0].price.total)}</div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;