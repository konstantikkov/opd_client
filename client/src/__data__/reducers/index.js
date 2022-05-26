import * as types from '../action-types'

const defaultState = {
    lection: {
        meta: {},
        error: false
    },
    student: {
        meta: {},
        error: false
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_STUDENT_ERROR:
            return {
                ...state,
                student: {
                    meta: {},
                    error: true
                }
            }
        case types.GET_LECTION_ERROR:
            return {
                ...state,
                lection: {
                    meta: {},
                    error: true
                }
            }
        case types.GET_STUDENT_REPORT:
            return {
                ...state,
                student: {
                    meta: action.meta,
                    error: false
                }
            }
        case types.GET_STUDENT_REPORT:
            return {
                ...state,
                lection: {
                    meta: action.meta,
                    error: false
                }
            }
        default:
            return state
    }
}
