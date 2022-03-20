import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {IsinHeader} from "../components/IsinHeader";
import {useSelector} from "react-redux";
import {IsinActionsCreator} from "../store/isins/ActionCreator";
import {TimeButtons} from "./TimeButtons";
import {isinOptions} from "../store/selectors";
import {IsinChart} from "./Chart";
import styled from "styled-components";
import {PriceSelect} from "../components/PriceSelect";

const StyledIsinContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Isin = () => {
    const dispatch = useDispatch()
    const data = useSelector(isinOptions)
    const yName = useSelector((state) => state.filter.currentPriceFilter)

    useEffect(() => {
        dispatch(IsinActionsCreator.fetchIsins)
    }, [])

    return <StyledIsinContainer>
        <IsinHeader isinCurrency={data.currency}
                    isinPrice={data.price}
                    code={data.code}
                    fullName={data.fullName}
                    endDate={data.endDate}
                    category={data.category}
                    index={data.index}
                    isinName={data.shortName}/>
        <TimeButtons/>
        <IsinChart data={data.prices}
                   yName={yName}
        />
        <PriceSelect/>
    </StyledIsinContainer>
}
