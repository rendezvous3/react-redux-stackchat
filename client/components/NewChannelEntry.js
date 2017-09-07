import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store';

const NewChannelEntry = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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

const mapStateToProps = function(state, ownProps) {
  return {
    NewChannelEntry: state.NewChannelEntry
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleChange: function(evt) {
      const inputValue = evt.target.value;
      dispatch(writeChannelName(inputValue));
    },
    handleSubmit: function(evt) {
      evt.preventDefault();
      // name="channelName";
      const name = evt.target.channelName.value;
      const newChannel = { name: name };
      const history = ownProps.history;
      dispatch(postChannel(newChannel, history));
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;