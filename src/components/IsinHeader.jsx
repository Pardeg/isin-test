import React from 'react';
import styled from "styled-components";

const StyledIsinHeaderContainer = styled.div`
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`
const StyledHeaderTextContainer = styled.div`
  display: flex;
  min-width: 200px;
  background-color: red;
  align-items: flex-end;
`
const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const StyledCurrencyWrapper = styled.div`
  margin-left: 10px;
`
const StyledCodeWrapper = styled.div`
  margin-bottom: 5px;
`

export const IsinHeader = ({
                               isinName = '', isinPrice = '', endDate = '', index,
                               isinCurrency = '', code = '', fullName = '', category,
                           }) => (
    <StyledIsinHeaderContainer>
        <StyledHeaderTextContainer>
            <div><h3>{`${isinName} ${isinPrice}`}</h3></div>
            <StyledCurrencyWrapper>
                <p>
                    {isinCurrency}
                </p>
            </StyledCurrencyWrapper>
        </StyledHeaderTextContainer>
        <StyledDescriptionContainer>
            <StyledCodeWrapper>
                <h4>
                    {code}
                </h4>
            </StyledCodeWrapper>
            <div>
                <h4>
                    {`${fullName}, ${category}, ${index}, till  ${endDate}`}
                </h4>
            </div>
        </StyledDescriptionContainer>
    </StyledIsinHeaderContainer>)
