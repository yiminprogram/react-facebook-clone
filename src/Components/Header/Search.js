import React from 'react';
import styled from 'styled-components';
import { Facebook, Search as SearchIcon } from '@material-ui/icons';

const HeaderSearch = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled(Facebook)`
  flex: 1;
  color: #3579ea;
`;

const SearchGroup = styled.div`
  position: relative;
  flex: 4;
  input {
    width: 100%;
    font-size: 18px;
    padding: 0.5rem 1.3rem 0.5rem 2.5rem;
    border: none;
    border-radius: 30px;
    background-color: #f0f2f5;
  }
`;

const BtnSearch = styled(SearchIcon)`
  position: absolute;
  top: 0.25rem;
  left: 0.65rem;
  color: #606770;
`;

const Search = () => {
  return (
    <HeaderSearch>
      <Logo />
      <SearchGroup>
        <BtnSearch />
        <input type="text" placeholder="搜尋 Facebook" />
      </SearchGroup>
    </HeaderSearch>
  );
};

export default Search;
