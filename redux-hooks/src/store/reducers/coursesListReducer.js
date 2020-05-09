import { COURSES_LIST } from '../actions/actionsType'

const INITIAL_STATE = {
  data: ['React', 'React Native', 'Java', 'Pyton'],
}

export const coursesList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COURSES_LIST:
      return { ...state, data: [...state.data, action.payload] }
    default:
      return state
  }
}
