import React, { useEffect, useState } from 'react'
import ReportService from '../services/report.service'
import StudentService from '../services/student.service'

const Reports = () => {
  const [ reportsData, setReportsData ] = useState([])
  const [ students, setStudents ] = useState([])

  useEffect(() => {
    const getReports = async () => {
      // if we get nothing set dummy report by calling following...
      // ReportService.getReports()

      const reports = await ReportService.getReports()
      setReportsData(reports)
    }

    getReports()
  }, [ reportsData ])

  useEffect(() => {
    const initialize = async () => {
      const students = await StudentService.getStudents()
      setStudents(students)
    }

    initialize()
  }, [])

  const deleteRowById = async (reportId) => {
    await ReportService.deleteById(reportId)
  }

  return (
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-start h-full">
          <div className="content-area">
            <header className="content-header">
              <div className="content-header-wrapper">
                <div>
                  <h3 className="font-semibold text-blueGray-700">Student Reports</h3>
                </div>

                <button
                    onClick={() => window.location = '/report/add'}
                    className="btn-add-student h-10"
                    type="button">+ ADD REPORT
                </button>
              </div>
            </header>
            <div className="p-3">
              <div className="my-2 overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th>
                      <div className="font-semibold text-left">No</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Year</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Enrollment ID</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Percentage</div>
                    </th>
                    <th>
                      <div className="font-semibold text-center">Actions</div>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                  {
                    reportsData.map((report, index) => {
                      const subjectReports = report.report || []
                      const totalSubject = subjectReports.length
                      const totalMarks = subjectReports.reduce((total, marks) => total + marks.obtain, 0)
                      const student = students.find(student => student.id === report.studentId)
                      const imgSrc = `https://ui-avatars.com/api/?name=${student?.name}&length=1&background=random`

                      return <tr key={index}>
                        <td>
                          <div className="text-left">{index + 1}</div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            {report?.year}
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img className="rounded-full"
                                   src={imgSrc}
                                   width="40"
                                   height="40"
                                   alt="Alex Shatov"/>
                            </div>
                            <div className="font-medium text-gray-800">{student?.name}</div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            {report.studentId}
                          </div>
                        </td>
                        <td>
                          <div className="text-left">{(totalMarks / totalSubject).toFixed(2)} %</div>
                        </td>
                        <td>
                          <div className="text-center">
                            <a className="mx-2 hover:text-teal-600" href={`report/${report.id}`}>Edit</a>
                            <button className="mx-2 hover:text-rose-600" onClick={() => deleteRowById(report.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Reports
