import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react'
import StudentService from '../services/student.service'
import ReportService from '../services/report.service'

const Report = () => {
  const { id } = useParams()
  const [ selectedStudent, setSelectedStudent ] = useState('')
  const [ students, setStudents ] = useState([])
  const [ reportData, setReportData ] = useState([])
  const [ year, setYear ] = useState('')

  useEffect(() => {
    const getStudents = async () => {
      const students = await StudentService.getStudents()

      setStudents(students)
    }

    getStudents()

    const getReport = async () => {
      const report = await ReportService.getReportById(id)

      setReportData(report)
      setSelectedStudent(report?.studentId)
      setYear(report?.year)
    }

    getReport()
  }, [ id ])

  const handleInputReportFiled = (reportIndex, name, value) => {
    const updatedReport = reportData.report.map((report, index) => {
      if (reportIndex === index) {
        report[name] = value
        return report
      }

      return report
    })

    setReportData({ ...reportData, report: updatedReport })
  }

  const addReportRow = () => {
    const row = {
      subject: '',
      total: 100,
      obtain: 0
    }

    const reports = (reportData?.report || [])
    reports.push(row)
    setReportData({ ...reportData, report: reports })
  }

  const deleteRowById = (index) => {
    const report = reportData.report.filter((report, idx) => idx !== index)

    setReportData({ ...reportData, report })
  }

  const saveReport = () => {
    const newReport = {
      id: uuidv4(),
      studentId: selectedStudent,
      year,
      report: reportData.report
    }

    ReportService.save(newReport)
    gotoReportsPage()
  }

  const updateReport = () => {
    reportData.year = year
    reportData.studentId = selectedStudent

    ReportService.updateReport(id, reportData)
    gotoReportsPage()
  }

  const gotoReportsPage = () => {
    window.location = '/reports'
  }

  return (
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-start h-full">
          <div className="content-area">
            <header className="content-header">
              <div className="content-header-wrapper">
                <h3 className="font-semibold text-blueGray-700">{id ? 'Edit' : 'Add'} Report {(students.find(student => student.id === reportData?.studentId))?.name}</h3>
              </div>
            </header>

            <div className="px-6 my-4 overflow-x-auto">
              <label className="block mb-2 font-medium dark:text-gray-400">Select year</label>
              <select onChange={e => setYear(e.target.value)}>
                <option hidden>Choose a Year</option>
                {[ 2018, 2019, 2020, 2021, 2022, 2023 ].map((year, index) => <option key={index} value={year} selected={reportData?.year === String(year)}>{year}</option>)}
              </select>

              <div className="my-4 overflow-x-auto">
                <label className="block mb-2 font-medium dark:text-gray-400">Select student </label>
                <select onChange={e => setSelectedStudent(e.target.value)}>
                  <option hidden>Choose a student</option>
                  {students.map((student, index) => <option key={index} value={student.id} selected={reportData?.studentId === student.id}>{student.name}</option>)}
                </select>
              </div>

              <div className="p-3">
                <button className="btn-add-student" type="button" onClick={addReportRow}>+ Add row</button>
                <div className="my-4 overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th>
                        <div className="font-semibold text-left">No</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">Subject</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">Total</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">Obtain</div>
                      </th>
                      <th>
                        <div className="font-semibold text-center">Actions</div>
                      </th>
                    </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                    {
                      (reportData?.report || []).map((report, index) => {
                        return (
                            <tr key={index}>
                              <td>
                                <div className="text-left">{index + 1}</div>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <input className="input-student-form mb-1" value={report.subject} name="subject"
                                         onChange={event => handleInputReportFiled(index, event.target.name, event.target.value)}/>
                                </div>
                              </td>
                              <td>
                                <div className="text-left">
                                  <input className="input-student-form mb-1" value={report.total} name="total"
                                         onChange={event => handleInputReportFiled(index, event.target.name, Number(event.target.value))}/>
                                </div>
                              </td>
                              <td>
                                <div className="text-left">
                                  <input className="input-student-form mb-1" value={report.obtain} name="obtain"
                                         onChange={event => handleInputReportFiled(index, event.target.name, Number(event.target.value))}/>
                                </div>
                              </td>
                              <td>
                                <div className="text-md text-center cursor-pointer">
                                  <button className="mx-2 hover:text-rose-600" onClick={() => deleteRowById(index)}>Delete
                                  </button>
                                </div>
                              </td>
                            </tr>)
                      })
                    }
                    </tbody>
                  </table>
                  <div className="my-5">
                    {id ?
                        <button className="btn-submit h-full ml-2" type="button" onClick={updateReport}>Update</button> :
                        <button className="btn-add-student h-10" type="button" onClick={saveReport}>Save</button>
                    }
                    <button className="btn-cancel ml-5" onClick={() => window.location = '/reports'}>Back</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Report
