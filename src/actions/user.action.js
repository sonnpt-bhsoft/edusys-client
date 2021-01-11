import { userConstants } from "./constants"
import axios from '../helper/axios'


export const signUp = (user) => {
    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST })
        const res = await axios.post('/register', {
            ...user
        })

        if (res.status === 201) {
            const { user, message } = res.data
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { user, message }
            })
        }
        if (res.status === 400) {
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}