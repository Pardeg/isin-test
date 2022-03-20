import React from "react";
import {TimeButton} from "../components/TimeButton";
import {useSelector} from "react-redux";
import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  display: inline-flex;
  width: fit-content;
  background-color: transparent;
  margin-bottom: 15px;
  margin-left: 50px;
`
export const TimeButtons = () => {
    const buttonOptions = useSelector(state => state.filter.timeFilters)

    return (<StyledButtonsContainer>
        {buttonOptions.map((el) => <TimeButton name={el.name}
                                               key={el.name}
                                               active={el.active}/>)}
    </StyledButtonsContainer>)
}
