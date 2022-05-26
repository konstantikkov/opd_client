import React from 'react'
import { connect } from 'react-redux'

import { getLection, getStudent } from '../__data__/selectors'
import { getLectionReport, getStudentReport } from '../__data__/actions'

import { MainContainerStyled } from './main.style'
import { Widget } from '../components/widget'

const Main = ({lection, student, lectionReport, studentReport}) => {
    return(
        <MainContainerStyled>
            <h1>Лекции и студенты</h1>
            <Widget title={'Лекция'} data={lection} handler={lectionReport} placeholder={'Введите название лекции'}/>
            <Widget title={'Студент'} data={student} handler={studentReport} placeholder={'Введите имя студента'}/>
        </MainContainerStyled>
    )
}

const mapStateToProps = (state, props) => {
    const lection = getLection(state)
    const student = getStudent(state)
    return {
        lection,
        student
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        lectionReport: (lectionName) => dispatch(getLectionReport(lectionName)),
        studentReport: (studentName) => dispatch(getStudentReport(studentName))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)