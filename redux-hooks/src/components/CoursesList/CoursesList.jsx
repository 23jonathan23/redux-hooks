import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './CoursesList.css'

import { coursesList } from '../../store/actions/actionCoursesList'

export default props => {
  const [course, setCourse] = useState('')

  const courses = useSelector(state => state.courses.data)
  const dispatch = useDispatch()

  function handleAddCourse() {
    const action = coursesList(course)
    dispatch(action)
    setCourse('')
  }

  return (
    <div className='containerCourses'>
      <h1 className='title'>Cursos para fazer</h1>
      <ul className='courses'>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>

      <input
        className='inputCourse'
        type='text'
        value={course}
        onChange={e => setCourse(e.target.value)}
      />
      <button className='buttonAddCourse' onClick={handleAddCourse}>
        Adicionar curso
      </button>
    </div>
  )
}
