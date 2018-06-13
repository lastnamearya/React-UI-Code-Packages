import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar url={tweet.img}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
      </div>
    </div>
  );
}

function Avatar({ url }) {
  return (
    <img src={url} alt="lastnamearya" className="avatar"/>
  );
}

function NameWithHandle({ author }) {
  return (
    <span className="name-with-handle">
      <span className="name">
        {author.name}
      </span>
      <span className="handle">
        {author.handle}
      </span>
    </span>
  );
}

function Time({ time }) {
  const timestring = moment(time).fromNow();
  return (
    <span className="time">
      {timestring}
    </span>
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

var tweetObject = {
  img: "https://avatars2.githubusercontent.com/u/6664187?s=400&u=eb02e1d29d8454abcefd948bf4d879509d56ef74&v=4",
  message: "Something about Cats",
  author: {
    name: "Jigyasu",
    handle: "@lastnamearya"
  },
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(
  <Tweet tweet={tweetObject}/>,
  document.querySelector('#root')
);