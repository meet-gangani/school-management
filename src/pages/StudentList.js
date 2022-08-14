import React from 'react'
import StudentService from '../services/student.service'

class StudentList extends React.Component {
  state = {
    students: [],
    searchInput: ''
  }

  async componentDidMount() {
    try {
      await this.initialize()
    } catch (e) {
      console.log(e)
    }
  }

  initialize = async () => {
    const students = await StudentService.getStudents()
    this.setState({ students })
  }

  deleteStudent = async (id) => {
    await StudentService.deleteById(id)
    await this.initialize()
  }

  handleSearchInput = async (event) => {
    const value = event.target.value
    this.setState({ searchInput: value })

    const students = await StudentService.getStudentsBySearchTerm(value)
    this.setState({ students })
  }

  render() {
    return (
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div className="flex flex-col justify-start h-full">
            <div className="content-area">
              <header className="content-header">
                <div className="content-header-wrapper">
                  <div>
                    <h3 className="font-semibold text-blueGray-700">Students List</h3>
                  </div>
                  <div className="search">
                    <div className="relative mr-2">
                      <input type="search"
                             value={this.state.searchInput}
                             name="searchInput"
                             onChange={(e) => this.handleSearchInput(e)}
                             className="input-student-search"
                             placeholder="Search..."/>
                      <div className="absolute top-0 left-0 inline-flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                             strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                          <rect x="0" y="0" width="24" height="24" stroke="none"/>
                          <circle cx="10" cy="10" r="7"/>
                          <line x1="21" y1="21" x2="15" y2="15"/>
                        </svg>
                      </div>
                    </div>

                    <button
                        onClick={() => window.location = '/student/add'}
                        className="btn-add-student"
                        type="button">+ ADD STUDENT
                    </button>
                  </div>
                </div>
              </header>

              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th>
                        <div className="font-semibold text-left">No</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">Student ID</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">DOB</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">CLASS</div>
                      </th>
                      <th>
                        <div className="font-semibold text-left">Gender</div>
                      </th>
                      <th>
                        <div className="font-semibold text-center">Mobile No</div>
                      </th>
                      <th>
                        <div className="font-semibold text-center">Actions</div>
                      </th>
                    </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                    {
                      this.state.students.map((student, index) => {
                        return <tr key={index}>
                          <td>
                            <div className="text-left">{index + 1}</div>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img className="rounded-full"
                                     src={student.img || `https://ui-avatars.com/api/?name=${student.name}&length=1&background=random`}
                                     width="40"
                                     height="40"
                                     alt="Alex Shatov"/>
                              </div>
                              <div className="font-medium text-gray-800">{student.name}</div>
                            </div>
                          </td>
                          <td>
                            <div className="text-left">{student.id}</div>
                          </td>
                          <td>
                            <div className="text-left">{student.dob}</div>
                          </td>
                          <td>
                            <div className="text-left">{student.class}</div>
                          </td>
                          <td>
                            <div className="text-left font-medium">{student.gender}</div>
                          </td>
                          <td>
                            <div className="text-md text-center">{student.mobileNo}</div>
                          </td>
                          <td>
                            <div className="text-md text-center cursor-pointer ">
                              <a className="mx-2 hover:text-teal-600" href={`student/${student.id}`}>Edit</a>
                              <button
                                  className="mx-2 hover:text-rose-600"
                                  onClick={async () => {
                                    await this.deleteStudent(student.id)
                                  }}>Delete
                              </button>
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
}

export default StudentList
