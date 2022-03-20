import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

const StyledSelectContainer = styled.div`
  position: absolute;
  left: 80%;
  bottom: 20%;
`

export const PriceSelect = () => {
    const priceData = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const onChangeHandle = (e) => {

        dispatch({type: 'SET_PRICE_FILTER', payload: e.target.value})
    }
    return (<StyledSelectContainer>
        <select onChange={(e) => onChangeHandle(e)}>
            {priceData?.currencyFilters && priceData.currencyFilters.map((el) => (
                <option key={el.name}
                        selected={el.selected}
                        value={el.name}>{el.name}</option>
            ))}
        </select>
    </StyledSelectContainer>)
}
