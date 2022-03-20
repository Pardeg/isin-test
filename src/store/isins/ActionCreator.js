import {getDefaultData} from "../../api";

export const IsinActionsCreator = {
    setIsins: (payload) => ({type: 'SET_ISINS', payload}),

    fetchIsins: async (dispatch) => {
        const result = await getDefaultData()
        dispatch(IsinActionsCreator.setIsins(result))
    }
}
