import { createSelector } from 'reselect'

export const getIndexSlice = createSelector((state) => state, (state) => (state?.default ?? {}))

export const getStudent = createSelector(getIndexSlice, (state) => (state?.student ?? {}))

export const getLection = createSelector(getIndexSlice, (state) => (state?.lection ?? {}))
