import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ToolTip from '@material-ui/core/Tooltip';

const BtnList = styled.li`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: #fff;
`;
const NavLink = styled(Link)`
  color: #67696d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #3579ea;
  }
`;
const NavButton = ({ Icon, Path, Title, setCurrent }) => {
  return (
    <BtnList>
      <ToolTip title={Title}>
        <NavLink to={Path} replace onClick={() => setCurrent((current) => (current = Title))}>
          <Icon />
        </NavLink>
      </ToolTip>
    </BtnList>
  );
};

export default NavButton;
