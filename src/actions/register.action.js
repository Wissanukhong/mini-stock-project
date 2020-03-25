import { HTTP_REGISTER_FETCHING, HTTP_REGISTER_SUCCESS, HTTP_REGISTER_FAILED } from "../constants";

export const setRegisterStateToFetching = () => ({
    type: HTTP_REGISTER_FETCHING,
})


export const setRegisterStateToSuccess = (payload) => ({
    type: HTTP_REGISTER_SUCCESS,
    payload
})

export const setRegisterStateToFailed = () => ({
    type: HTTP_REGISTER_FAILED,
})

export const register = (history, credentail) => {
    return dispatch=> {
        dispatch(setRegisterStateToFetching)
        serTimeout(()=> {
            dispatch(setRegisterStateToSuccess({ result: "ok" }))
        }, 3000)
        // dispatch(setRegisterStateToFailed())
    }
}