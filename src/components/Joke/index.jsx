import { useState } from 'react';
import './index.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [positive, setPositive] = useState(likes);
  const [negative, setNegative] = useState(dislikes);

  const handleLikes = () => {
    setPositive(positive + 1);
  };

  const handleDislikes = () => {
    setNegative(negative + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleLikes}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {positive}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleDislikes}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {negative}
          </span>
        </div>
      </div>
    </div>
  );
};
