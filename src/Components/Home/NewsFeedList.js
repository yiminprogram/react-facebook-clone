import React from 'react';
import styled from 'styled-components';
import Photo from '../../image/user-photo.png';
import BtnStatus from './BtnStatus';
import { ThumbUpOutlined, ChatBubbleOutlineOutlined, ShareOutlined } from '@material-ui/icons';

const List = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px #ddd;
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
        <button>100</button>
        <button>10則留言，6次分享</button>
      </Status>
      <hr />
      <BtnDiv>
        <BtnStatus Icon={ThumbUpOutlined}>讚</BtnStatus>
        <BtnStatus Icon={ChatBubbleOutlineOutlined}>留言</BtnStatus>
        <BtnStatus Icon={ShareOutlined}>分享</BtnStatus>
      </BtnDiv>
    </List>
  );
};

export default NewsFeedList;
