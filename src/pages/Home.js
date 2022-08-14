import React, { useEffect, useState } from 'react'
import ReportService from '../services/report.service'
import StudentService from '../services/student.service'
import orderBy from 'lodash/orderBy'
import moment from 'moment'

const Home = () => {
  const [ reports, setReports ] = useState([])
  const [ students, setStudents ] = useState([])

  useEffect(() => {
    const getReports = async () => {
      const reports = await ReportService.getReports()

      reports.forEach((reportObj) => {
        const totalMarks = reportObj.report.reduce((total, marks) => total + marks.obtain, 0)
        const totalSubject = reportObj.report.length

        reportObj.percentage = (totalMarks / totalSubject).toFixed(2)
      })

      const orderReports = orderBy(reports, [ 'percentage' ], [ 'desc' ])

      setReports(orderReports)
    }

    getReports()
  }, [ reports ])

  useEffect(() => {
    const initialize = async () => {
      const students = await StudentService.getStudents()

      students.forEach((student) => {
        const year = moment().year()
        student.BDate = moment(student.dob).set('year', year).format('YYYY-MM-DD')

        if (moment(student.BDate).valueOf() < moment().valueOf()) {
          student.BDate = moment(student.BDate).set('year', year + 1).format('YYYY-MM-DD')
        }
      })

      const studentsDataSortBy = orderBy(students, [ 'BDate' ], [ 'asc' ])
      setStudents(studentsDataSortBy)
    }

    initialize()
  }, [ students ])

  return (
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-start h-full">
          <div className="content-area">
            <header className="content-header">
              <div className="content-header-wrapper">
                <div>
                  <h3 className="font-semibold text-blueGray-700">Leaderboard</h3>
                </div>
              </div>
            </header>
            <div className="p-3">
              <div className="my-4 overflow-x-auto">
                <table className="table-auto w-full">
                  <colgroup>
                    <col width="5%"/>
                    <col width="25%"/>
                    <col width="25%"/>
                    <col width="*"/>
                  </colgroup>
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th>
                      <div className="font-semibold text-left">No</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Year</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Percentage</div>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                  {
                    reports.slice(0, 5).map((reportObj, index) => {
                      const student = students.find(student => student.id === reportObj.studentId)
                      const imgSrc = `https://ui-avatars.com/api/?name=${student?.name}&length=1&background=random`

                      return <tr key={index}>
                        <td>
                          <div className="text-left">{index + 1}</div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img className="rounded-full"
                                   src={imgSrc}
                                   width="40"
                                   height="40"
                                   alt="Alex"/>
                            </div>
                            <div className="font-medium text-gray-800">{student.name}</div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            {reportObj.year}
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            {reportObj.percentage}
                          </div>
                        </td>
                      </tr>
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="content-area my-2">
            <header className="content-header">
              <div className="content-header-wrapper">
                <div>
                  <h3 className="font-semibold text-blueGray-700">Upcoming Birthday</h3>
                </div>
              </div>
            </header>
            <div className="p-3">
              <div className="my-4 overflow-x-auto">
                <table className="table-auto w-full">
                  <colgroup>
                    <col width="5%"/>
                    <col width="50% "/>
                    <col width="*"/>
                  </colgroup>
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th>
                      <div className="font-semibold text-left">No</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th>
                      <div className="font-semibold text-left">DOB</div>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                  {
                    students.slice(0, 3).map((student, index) => {
                      const imgSrc = `https://ui-avatars.com/api/?name=${student?.name}&length=1&background=random`
                      return <tr key={index}>
                        <td>
                          <div className="text-left">{index + 1}</div>
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
                            <div className="font-medium text-gray-800">{student.name}</div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            {student.dob}
                          </div>
                        </td>
                      </tr>
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home
