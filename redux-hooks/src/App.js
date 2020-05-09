import React from 'react'
import { Provider } from 'react-redux'

import './App.css'

import configStore from './store/storeConfig'

import CoursesList from './components/CoursesList/CoursesList'

const store = configStore()

export default function App() {
  return (
    <Provider store={store}>
      <CoursesList />
    </Provider>
  )
}
