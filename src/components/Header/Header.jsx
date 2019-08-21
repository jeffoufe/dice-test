// @flow

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import logo from '../../assets/logo-light.png';
import { reset, fetchEvents } from '../../reducers/events/actions'
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import qs from 'qs';

type HeaderProps = {
    reset: () => void,
    fetchEvents: (string) => void,
    location: { 
        search: string 
    },
    history: {
        push: (string) => void
    }
}

export const Header = ({ history, reset, fetchEvents, location }: HeaderProps) => {
    const venue = qs.parse(location.search.substring(1)).venue;
    const [search, setSearch] = useState(venue);

    const searchVenue = (e) => {
        if (e.keyCode === 13) {
            history.push(`/events?venue=${search}`);
            reset();
            fetchEvents(search);
        }
    }

    return (
        <header className={styles['header-container']}>
            <img 
                src={logo} 
                alt='header-logo' 
                onClick={() => history.push('/')}
            />
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    onKeyDown={searchVenue}
                />
            </div>
        </header>
    );
}

const mapDispatchToProps = (dispatch) => ({ 
    fetchEvents: (venue: string) => dispatch(fetchEvents(venue) ),
    reset: () => dispatch(reset())
}) 

export default connect(() => ({}), mapDispatchToProps)(withRouter(Header));