import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar url={tweet.img}/>
    </div>
  )
}

function Avatar({ url }) {
  return (
    <img src={url} alt="lastnamearya" className="avatar"/>
  );
}

var tweetObject = {
  img: "https://avatars2.githubusercontent.com/u/6664187?s=400&u=eb02e1d29d8454abcefd948bf4d879509d56ef74&v=4"
};

ReactDOM.render(
  <Tweet tweet={tweetObject}/>,
  document.querySelector('#root')
);