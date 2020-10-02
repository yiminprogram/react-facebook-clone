import React from 'react';
import styled from 'styled-components';
import Photo from '../../image/user-photo.png';
import BtnStatus from './BtnStatus';
import { ThumbUpOutlined, ChatBubbleOutlineOutlined, ShareOutlined } from '@material-ui/icons';
import { blue, orange, green } from '@material-ui/core/colors';

const List = styled.div`
  margin: 1rem 0;
  padding: 0.6rem 1rem 0 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd;

  > hr {
    width: 100%;
    height: 2px;
    margin: 0;
    background-color: #edeef1;
    color: #edeef1;
    border-width: 0;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  > img {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    border-radius: 50%;
  }
  > span {
    font-size: 1rem;
  }
`;
const Content = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.3;
`;
const Status = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  > button {
    cursor: pointer;
    color: #6d6f73;
    background-color: #fff;
    border: none;
    font-size: 0.8rem;
  }
  .status-btn {
    display: flex;
    align-items: center;

    > span {
      margin-left: 0.3rem;
    }
  }
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewsFeedList = () => {
  return (
    <List>
      <Title>
        <img src={Photo} alt="error" />
        <span>yimin</span>
      </Title>
      <Content>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi accusamus maxime saepe ipsum repudiandae minima, aliquam labore, molestiae illo fugiat possimus, illum
          vitae incidunt. Tempore, doloremque? Exercitationem nihil saepe qui.
        </p>
      </Content>
      <Status>
        <button className="status-btn">
          <ThumbUpOutlined style={{ color: blue[500], fontSize: 20 }} />
          <span>100</span>
        </button>
        <button>10則留言，6次分享</button>
      </Status>
      <hr />
      <BtnDiv>
        <BtnStatus Icon={ThumbUpOutlined} Color={{ color: blue[500], fontSize: 25 }}>
          讚
        </BtnStatus>
        <BtnStatus Icon={ChatBubbleOutlineOutlined} Color={{ color: orange[500], fontSize: 25 }}>
          留言
        </BtnStatus>
        <BtnStatus Icon={ShareOutlined} Color={{ color: green[500], fontSize: 25 }}>
          分享
        </BtnStatus>
      </BtnDiv>
    </List>
  );
};

export default NewsFeedList;
