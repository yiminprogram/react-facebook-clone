import React from 'react';
import styled from 'styled-components';
import User from '../../image/user-photo.png';
const Card = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  > img {
    width: 16%;
    height: 16%;
    border-radius: 50%;
  }
`;
const Info = styled.div`
  width: 80%;
  margin: 0 1rem;
  > h3 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;
const BtnCard = styled.div`
  display: flex;
  > button {
    cursor: pointer;
    flex: 1;
    padding: 0.5rem 0;
    border: none;
    border-radius: 5px;
  }
  .add {
    margin-right: 0.1rem;
    color: #fff;
    background-color: #3579ea;
  }
  .remove {
    margin-left: 0.1rem;
    background-color: #e3e5ea;
  }
`;
const CardFriends = () => {
  return (
    <Card>
      <img src={User} alt="error" />
      <Info>
        <h3>yimin</h3>
        <BtnCard>
          <button className="add">加朋友</button>
          <button className="remove">移除</button>
        </BtnCard>
      </Info>
    </Card>
  );
};

export default CardFriends;
