import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'
import StudentService from '../services/student.service'

const Student = () => {

  const { studentId } = useParams()
  const [ saveLoader, setSaveLoader ] = useState(false)
  const [ name, setName ] = useState('')
  const [ dob, setDob ] = useState('')
  const [ studyClass, setStudyClass ] = useState()
  const [ gender, setGender ] = useState('')
  const [ mobileNo, setMobileNo ] = useState('')

  useEffect(() => {
    getStudentInfo(studentId)
  }, [ studentId ])

  const getStudentInfo = async (studentId) => {
    const student = await StudentService.getStudent(studentId)

    setName(student?.name)
    setDob(student?.dob)
    setStudyClass(student?.class)
    setGender(student?.gender)
    setMobileNo(student?.mobileNo)
  }

  const addStudentInfo = async () => {
    setSaveLoader(true)

    await StudentService.addStudent({
      name,
      dob,
      gender,
      mobileNo,
      id: uuidv4(),
      class: studyClass
    })

    setSaveLoader(false)
    gotoStudentsPage()
  }

  const updateStudentInfo = async () => {
    setSaveLoader(true)

    await StudentService.updateById({
      name,
      dob,
      gender,
      mobileNo,
      id: studentId,
      class: studyClass
    })

    setTimeout(() => {
      setSaveLoader(false)
      gotoStudentsPage()
    }, 500)
  }

  const gotoStudentsPage = () => {
    window.location = '/students'
  }

  return (
      <div className="container py-12 mx-auto w-11/12 md:w-2/3 max-w-xl">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">{studentId ? 'EDIT' : 'ADD'} STUDENT</h1>

          <label>STUDENT NAME</label>
          <input className="input-student-form" name="name" value={name} onChange={(e) => setName(e.target.value)}/>

          <label>DOB</label>
          <input className="input-student-form" type="date" name="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>

          <label>Class</label>
          <input className="input-student-form" name="class" value={studyClass} onChange={(e) => setStudyClass(e.target.value)}/>

          <label>GENDER</label>
          <input className="input-student-form" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>

          <label>MOBILE NO</label>
          <input className="input-student-form" name="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/>

          <div className="flex items-center justify-start w-full">
            {
              studentId ? <button className="btn-submit" onClick={updateStudentInfo}>Update</button> : <button className="btn-submit" onClick={addStudentInfo}>+ Add</button>
            }
            <button className="btn-cancel mx-10" onClick={() => window.location = '/students'}>Cancel</button>
            {saveLoader ? <span className="text-teal-600">{studentId ? 'Updated' : 'Added'} successfully</span> : null}
          </div>
        </div>
      </div>
  )
}

export default Student
