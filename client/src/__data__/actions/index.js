import { network } from '../../utils'

import {
    GET_STUDENT_REPORT,
    GET_LECTION_REPORT,
    GET_STUDENT_ERROR,
    GET_LECTION_ERROR
} from '../action-types'

export const getLectionReport = (lectionName) => async (dispatch) => {
    try {
        const response = await network.get('/getlectionreport', {
            params: {
                lectionName: lectionName,
                reportTypeStr: 'JSON'
            }
        })
        if (response.status === 200) {
            return dispatch({
                type: GET_LECTION_REPORT,
                meta: response.data
            })
        }
        throw response.status
    }
    catch (error) {
        return dispatch({type: GET_LECTION_ERROR})
    }
}

export const getStudentReport = (studentName) => async (dispatch) => {
    try {
        const response = await network.get('/getstudentreport', {
            params: {
                studentName: studentName,
                reportTypeStr: 'JSON'
            }
        })
        if(response.status === 200) {
            return dispatch({
                type: GET_STUDENT_REPORT,
                meta: response.data
            })
        }
        throw response.status
    }
    catch (error) {
        return dispatch({type: GET_STUDENT_ERROR})
    }
}
