import { createStore, combineReducers } from 'redux'

import { coursesList } from './reducers/coursesListReducer'

const reducers = combineReducers({
  courses: coursesList,
})

function configStore() {
  return createStore(reducers)
}

export default configStore
