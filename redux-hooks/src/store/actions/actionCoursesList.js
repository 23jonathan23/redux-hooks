import { COURSES_LIST } from './actionsType'

export const coursesList = course => ({
  type: COURSES_LIST,
  payload: course,
})
