import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle/> <Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
     src="https://avatars2.githubusercontent.com/u/6664187?s=400&u=eb02e1d29d8454abcefd948bf4d879509d56ef74&v=4" 
     alt="lastnamearya" 
     className="avatar"
    /> 
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">
        Jigyasu Arya
      </span>
      <span className="handle">
        @lastnamearya
      </span>
    </span>
  );
}

const Time = () => (
  <span className="time">3 hr ago</span>
)

function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
  <Tweet />,
  document.querySelector('#root')
);