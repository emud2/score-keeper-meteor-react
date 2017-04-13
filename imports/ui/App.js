import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './Titlebar';
import AddPlayer from './Addplayer';
import PlayerList from './Playerlist';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle='Created by David Dume' />
        <div className='wrapper'>
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
