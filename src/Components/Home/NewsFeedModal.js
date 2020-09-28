import React from 'react';
import styled from 'styled-components';
import UserPhoto from '../../image/user-photo.png';
import BtnNewsFeed from './BtnNewsFeed';
import { VideoCall, PhotoLibrary, GroupAdd, Mood, LocationOn, MoreHoriz, Close } from '@material-ui/icons';
import { purple, green, blue, orange, red, grey } from '@material-ui/core/colors';

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ffffffcc;
  z-index: 1;
`;

const Form = styled.form`
  position: relative;
  width: 30%;
  height: 45%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  padding: 1rem 1.3rem;

  h1 {
    font-size: 1rem;
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 125px;
    border: none;
    resize: none;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    &:focus {
      outline: none;
    }
  }
  > button {
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    background-color: #3579ea;
    border: none;
    border-radius: 5px;
    padding: 0.3rem;
  }
`;
const BtnClose = styled(Close)`
  cursor: pointer;
  position: absolute;
  right: 3%;
  top: 3%;
  color: #5f666f;
  background-color: #e4e6ea;
  border-radius: 50%;

  &:hover {
    background-color: #c5cad3;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  span {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;
const AddContent = styled.div`
  border: 1px solid #cdcfd3;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8rem;
  }
`;
const NewsFeedModal = ({ close }) => {
  return (
    <Modal>
      <Form>
        <BtnClose onClick={() => close()} />
        <h1>建立貼文</h1>
        <hr />
        <User>
          <img src={UserPhoto} alt="error" />
          <span>yimin</span>
        </User>
        <textarea placeholder="yimin，在想些什麼"></textarea>
        <AddContent>
          <span>新增到貼文</span>
          <BtnNewsFeed Color={{ color: purple[500] }} Icon={VideoCall} />
          <BtnNewsFeed Color={{ color: green[500] }} Icon={PhotoLibrary} />
          <BtnNewsFeed Color={{ color: blue[500] }} Icon={GroupAdd} />
          <BtnNewsFeed Color={{ color: orange[500] }} Icon={Mood} />
          <BtnNewsFeed Color={{ color: red[500] }} Icon={LocationOn} />
          <BtnNewsFeed Color={{ color: grey[500] }} Icon={MoreHoriz} />
        </AddContent>
        <button>發佈</button>
      </Form>
    </Modal>
  );
};

export default NewsFeedModal;
