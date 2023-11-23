import React from 'react';
import styled from 'styled-components';
import { ArrowUpOutlined } from '@ant-design/icons';

const SearchBar = (props) => {
    const { searchText, onChangeSearchText, onClickSearchIcon } = props;
    return (
        <SearchBarContainer>
            <SearchInput
                value={searchText}
                onChange={onChangeSearchText}
                type="text" 
                placeholder='궁금한점을 물어보세요...'
            />
            <UploadIconBox
                search={searchText}
                onClick={onClickSearchIcon}
            >
                <ArrowUpOutlined 
                    style={{color: "white"
                }}/>
            </UploadIconBox>
        </SearchBarContainer>
    );
};

export default SearchBar;

const SearchBarContainer = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    padding: 14px 48px 14px 16px;
    border-radius: 12px;
    height: 52px;
    max-width: calc(100% - 24px);
    margin: 0 auto;
    position: relative;
`

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
`

const UploadIconBox = styled.div`
    cursor: ${(props) => (props.search ? "pointer" : "auto")};
    background: ${(props) => (props.search ? "black" : "#e5e5e5")};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 6px;
    &:hober{
        
    }
`