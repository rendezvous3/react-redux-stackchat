import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';



const ChannelList = (props) => {

  const { messages, channels } = props;

  return (
    <ul>
    {
      channels.map(channel => {
        return (
        <li key={channel.id}>
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span># {channel.name}</span>
            <span className="badge">{ messages.filter(message => message.channelId === channel.id).length }</span>
          </NavLink>
        </li>
        )
      })
    }
    <li>
      <NavLink to="/new-channel">Create a new channel...</NavLink>
    </li>
    </ul>

  );
}

/** Write your `connect` component below! **/

// here we choose pieces of state want to pass as props to dumpb component
const mapStateToProps = function(state, ownProps) {

  console.log('Container own props:', ownProps);

  return {
    messages: state.messages,
     channels : state.channels
  };
}


// container components is connected to the store, whenever the state in
// our store changes, this component will know that it needs to rerender
// dumb component that we passed in, ChannelList
const ChannelListContainer = connect(mapStateToProps)(ChannelList);
const ContainerWithRouter = withRouter(ChannelListContainer);
export default ContainerWithRouter;
