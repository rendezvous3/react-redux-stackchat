import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store';

const NewChannelEntry = (props) => {
  const NewChannelEntry = props.NewChannelEntry;
  return (
    <form onSubmit={(evt) => props.handleSubmit(NewChannelEntry, evt)}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = function(state) {
  return {
    NewChannelEntry: state.NewChannelEntry
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    handleChange: function(evt) {
      const inputValue = evt.target.value;
      dispatch(writeChannelName(inputValue));
    },
    handleSubmit: function(NewChannelEntry, evt) {
      evt.preventDefault();
      const name = NewChannelEntry;
      const newChannel = { name: name };
      dispatch(postChannel(newChannel));
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;