// @flow

import React, { useEffect, Fragment } from 'react';
import { fetchEvents, triggerFetch, reset } from '../../reducers/events/actions';
import { withRouter, Redirect } from 'react-router-dom'
import qs from 'qs';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import styles from './Events.module.scss';

import type { EventCardProps } from '../../components/EventCard/EventCard';
import type { EventsState } from '../../reducers/events/reducer';

type PureEventsProps = {
    location: {
        search: string
    },
    triggerFetch: () => void,
    reset: () => void,
    fetchEvents: (string) => void,
    events: EventsState
}


export const PureEvents = ({ location, fetchEvents, reset, triggerFetch, events: { events, willFetchEvents, isLoading, links, error } }: PureEventsProps) => {
    const venue = qs.parse(location.search.substring(1)).venue;

    useEffect(() => {
        if (willFetchEvents) {
            fetchEvents(venue);
        }
    })

    useEffect(() => {
        return () => {
          reset();
        }
    }, []);

    return venue
        ? (
            <Fragment>
                <Header />
                <div className={styles.container}>
                    {!!events.length && events.map((event: EventCardProps, index: number) => 
                        <EventCard {...event} key={`event-card-${index}`} />
                    )}
                    {!events.length && !isLoading && (
                        <div className={styles.error} id='error'>
                            {error || 'No results... Please try again with another venue'}
                        </div>
                    )}
                </div>
                {!!events.length && !isLoading && links.next && (
                    <Button 
                        theme='dark' 
                        className={styles['load-more']} 
                        onClick={() => triggerFetch()}
                    >
                        Load more
                    </Button>
                )}
                {isLoading && <div className={styles['loading-container']}>
                    <Loading />
                </div>}
            </Fragment>
        )
        : <Redirect to='/' />
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({ 
    fetchEvents: (venue: string) => dispatch(fetchEvents(venue) ),
    triggerFetch: () => dispatch(triggerFetch()),
    reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PureEvents));