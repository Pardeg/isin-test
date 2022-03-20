import {createSelector} from "@reduxjs/toolkit";
import {
    dateFormatter,
    formatMonth,
    maxDateFormatter,
    monthFilter,
    quarterFilter,
    weekFilter,
    yearFilter
} from "../utils";

const timeOptions = (state) => state.filter.currentTimeFilter;
const priceOptions = (state) => state.filter.currentPriceFilter;
const fetchedIsin = (state) => state.isin;


export const isinOptions = createSelector(timeOptions, fetchedIsin, priceOptions, (timeOptions, fetchedIsin, priceOptions) => {
    switch (timeOptions) {
        case 'Max':
            return {...fetchedIsin, prices: maxDateFormatter(fetchedIsin.prices, formatMonth, priceOptions)}
        case 'Year':
            return {...fetchedIsin, prices: dateFormatter(fetchedIsin.prices, formatMonth, yearFilter, priceOptions)}
        case 'Quarter':
            return {...fetchedIsin, prices: dateFormatter(fetchedIsin.prices, formatMonth, quarterFilter, priceOptions)}
        case 'Month':
            return {...fetchedIsin, prices: dateFormatter(fetchedIsin.prices, formatMonth, monthFilter, priceOptions)}
        case 'Week':
            return {...fetchedIsin, prices: weekFilter(fetchedIsin.prices, priceOptions)}
        default:
            if (fetchedIsin.prices) {

                return {
                    ...fetchedIsin,
                    prices: dateFormatter(fetchedIsin.prices, formatMonth, monthFilter, priceOptions)
                }
            }
            return {}
    }
})
