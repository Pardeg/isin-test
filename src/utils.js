import {format, isThisQuarter, isThisWeek, isThisYear} from "date-fns";
import {parseISO} from "date-fns";
import {isThisMonth} from "date-fns";
import {differenceInDays} from "date-fns";

export const changeTimeFilter = (timeFilters, name) => timeFilters.map((el) => {
    if (el.name === name) return {name, active: true}
    if (el.active === true) return {name: el.name, true: false}
    return el
})

export const formatWeek = (el) => format(new Date(el), 'dd.MM')
export const formatMonth = (el) => format(new Date(el), 'dd.MM.yy')
export const quarterFilter = (el) => isThisQuarter(new Date(el))
export const monthFilter = (el) => isThisMonth(new Date(el))
export const yearFilter = (el) => isThisYear(new Date(el))

export const weekFilter = (isin, priceFilter = 'price') => {
    const curDate = new Date()
    return isin.filter(el => {
        if (differenceInDays(curDate, new Date(el.date)) < 7 && differenceInDays(curDate, new Date(el.date)) > 0) {

            return true
        }
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(el => ({
            ...el,
            date: formatWeek(el.date),
            uv: formatWeek(el.date),
            pv: el[priceFilter]
        }))

}


export const dateFormatter = (isin, format, dateDistance, priceFilter = 'price') => {

    return isin.filter((el) => dateDistance(el.date))
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((el) => ({...el, uv: format(el.date), pv: el[priceFilter], date: format(el.date)}))
}

export const maxDateFormatter = (isin, format, priceFilter = 'price') => {

    return isin.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((el) => ({...el, uv: format(el.date), pv: el[priceFilter], date: format(el.date)}))
}


