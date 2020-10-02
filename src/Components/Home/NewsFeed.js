import React, { useState } from 'react';
import styled from 'styled-components';
import BtnFeedType from './BtnFeedType';
import NewsFeedModal from './NewsFeedModal';
import User from '../../image/user-photo.png';
import { Videocam, PhotoLibrary, Mood } from '@material-ui/icons';
import { red, blue, green } from '@material-ui/core/colors';
const Feed = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd;

  > hr {
    width: 100%;
    height: 2px;
    background-color: #edeef1;
    color: #edeef1;
    border-width: 0;
  }
`;
const FeedInput = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    cursor: pointer;
    margin: 0 1rem;
    border-radius: 50%;
  }
  button {
    flex: 1;
    cursor: pointer;
    padding: 0.2rem 0.8rem;
    border: none;
    border-radius: 30px;
    text-align: left;
    background-color: #eff1f4;
    color: #887c90;
    font-size: 1rem;
  }
`;
const FeedType = styled.div`
  display: flex;
`;
const NewsFeed = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Feed>
      <FeedInput>
        <img src={User} alt="error" />
        <button onClick={() => setIsModal((modal) => (modal = true))}>yimin，在想些什麼</button>
      </FeedInput>
      <hr />
      <FeedType>
        <BtnFeedType Icon={Videocam} Color={{ color: blue[500] }}>
          直播視訊
        </BtnFeedType>
        <BtnFeedType Icon={PhotoLibrary} Color={{ color: red[500] }}>
          相片/影片
        </BtnFeedType>
        <BtnFeedType Icon={Mood} Color={{ color: green[500] }}>
          感受/活動
        </BtnFeedType>
      </FeedType>
      {isModal ? <NewsFeedModal setIsModal={setIsModal} /> : null}
    </Feed>
  );
};

export default NewsFeed;
