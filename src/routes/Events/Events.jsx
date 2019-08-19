// @flow

import React, { useEffect } from 'react';
import { fetchEvents } from '../../reducers/events/actions';
import { withRouter, Redirect } from 'react-router-dom'
import qs from 'qs';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';
import type { EventsState } from '../../reducers/events/reducer';

type PureEventsProps = {
    location: {
        search: string
    },
    fetchEvents: (string) => void,
    events: EventsState
}


export const PureEvents = ({ location, fetchEvents, events }: PureEventsProps) => {
    const venue = qs.parse(location.search.substring(1)).venue;

    useEffect(() => {
        if (events.willFetchEvents) {
            fetchEvents(venue);
        }
    })

    return venue
        ? (
           <div>
               {!!events.events.length && <EventCard {...events.events[0]} />}
            </div>
        )
        : <Redirect to='/' />
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({ fetchEvents: (venue: string) => dispatch(fetchEvents(venue) )})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PureEvents));