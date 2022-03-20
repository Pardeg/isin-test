import React from 'react';
import {useDispatch} from "react-redux";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.active ? 'lightgrey' : 'white'};
  border: 1px solid black;
  display: flex;
  padding: 5px;
  font-weight: bold;

  &:nth-child(1) {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  &:nth-child(5) {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`
export const TimeButton = ({name = '', active = false}) => {
    const dispatch = useDispatch()

    const onClickHandle = () => {
        dispatch({type: 'SET_TIME_FILTER', payload: name})
    }

    return (<>
        <StyledButton active={active}
                      onClick={onClickHandle}>
            {name}
        </StyledButton>
    </>)
}
