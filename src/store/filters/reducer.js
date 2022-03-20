import {changeTimeFilter} from "../../utils";

const initState = {
    timeFilters: [{name: 'Week', active: false}, {name: 'Month', active: true}, {
        name: 'Quarter',
        active: false
    }, {name: 'Year', active: false}, {name: 'Max', active: false}],
    currentTimeFilter: '',
    currencyFilters: [{name: 'Yield', selected: false}, {name: 'Spread', selected: false}, {
        name: 'Price',
        selected: true
    }]
}

export const timeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TIME_FILTER':
            const {timeFilters} = state;
            const newFilters = changeTimeFilter(timeFilters, action.payload)
            return {...state, timeFilters: newFilters, currentTimeFilter: action.payload}
        case 'SET_PRICE_FILTER':
            const {currencyFilters} = state;
            const priceFilters = changeTimeFilter(currencyFilters, action.payload.toLowerCase())
            return {...state, currencyFilters: priceFilters, currentPriceFilter: action.payload.toLowerCase()}
        default:
            return state;
    }
}
