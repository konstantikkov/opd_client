import React, { useEffect, useState } from 'react'

import Assets from '../../assets'
import { InfoWrapperStyled, UnknownStyled, DataWrapperStyled, DataStyled, DataHeadStyled, DataTailStyled, DataRowStyled } from './info-wrapper.style'

const setLevel = (mark) => {
    switch (mark) {
        case '2':
            return 'rgba(55,198,237,0.5)'
        case '3':
            return 'rgba(60,214,207,0.5)'
        case '4':
            return 'rgba(55,237,176,0.5)'
        case '5':
            return 'rgba(52,227,119,0.5)'
    }
}

const Student = ({ data }) => {
    return(<DataWrapperStyled>
        <h2>{data.studentName}</h2>
        <h3>Оценки</h3>
        {
            data.courseMarksPairs.map((course) => {
                return(<DataStyled>
                    <h3>{course.lector.name}</h3>
                    {
                        course.lectionMarkPairs.map((mark) => {
                            const level = setLevel(mark.second)
                            return(
                                <DataRowStyled>
                                    <DataHeadStyled>{mark.first}</DataHeadStyled>
                                    <DataTailStyled level={level}>{mark.second}</DataTailStyled>
                                </DataRowStyled>
                            )
                        })
                    }
                </DataStyled>)
            })
        }
    </DataWrapperStyled>)
}

export const InfoWrapper = ({title, data, error}) => {
    const [side, setSide] = useState(false)

    useEffect(() => {
        setSide((flag) => flag)
    }, [data])
    if (error) {
        return(
            <UnknownStyled>
                <img src={Assets.saiorseQuestion}/>
                <h2>Извините, но по Вашему запросу ничего не найдено</h2>
            </UnknownStyled>
        )
    }

    if (Object.keys(data.meta).length !== 0) {
        return (
            <InfoWrapperStyled>
                {
                    !side && <img src={Assets.saiorsePointLeft}/>
                }
                {
                    title === 'Студент' ?
                        <Student data={data.meta}/>
                        :
                        ''
                }
                {
                    side && <img src={Assets.saiorsePointRight}/>
                }
            </InfoWrapperStyled>
        )
    }
}