class StudentService {
  getStudentsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('students')) || []
  }

  setStudentsInLocalStorage(students) {
    localStorage.setItem('students', JSON.stringify(students))
  }

  async getStudents() {
    // const students = [
    //   { 'name': 'rabindraa', 'dob': '2022-07-02', 'gender': 'male', 'mobileNo': '36576723785689', 'id': '04ad2f49-437b-4b29-8f6c-2ae6320e5fbe', 'class': '4' },
    //   { 'name': 'ritviz', 'dob': '2022-07-02', 'gender': 'female', 'mobileNo': '367467848334', 'id': 'c91543e4-551c-4745-8db5-c8aa0e52e4c4', 'class': '6' },
    //   { name: 'sophia', dob: '2022-07-31', gender: 'male', mobileNo: '24363172986', id: '05a1039a-58fb-4f17-8c70-c7e1f5ddf0b9', class: '7' },
    //   { name: 'rahul', dob: '2022-07-02', gender: 'male', mobileNo: '362 77397843', id: 'dc715bc9-4131-484a-aad7-fba62a296ba1', class: '7' },
    //   { name: 'simone', dob: '2022-07-10', gender: 'female', mobileNo: '645735856976', id: 'e485361a-c41c-4902-86b3-4e6013d45186', class: '9' },
    //   { name: 'lia', dob: '2022-07-13', gender: 'female', mobileNo: '797899 898498', id: '1ba93f27-f504-427e-b88b-6dfc1a540e93', class: '8' },
    //   { name: 'siaan', dob: '2020-05-12', gender: 'male', mobileNo: '848484848448', id: 'bd695aa6-b27b-453d-b354-a59c85bc6101', class: '1' },
    //   { name: 'woodensuki', dob: '2025-08-12', gender: 'female', mobileNo: '885858 8484', id: 'f4a4ed13-c35f-4077-9f49-0d9da84f59e1', class: '8' }
    // ]

    // localStorage.setItem('students', JSON.stringify(students))

    return this.getStudentsFromLocalStorage()
  }

  async getStudent(studentId) {
    const studentsData = this.getStudentsFromLocalStorage()

    return studentsData.find(student => String(student.id) === studentId)
  }

  async addStudent(student) {
    const studentsData = this.getStudentsFromLocalStorage()
    studentsData.push(student)

    this.setStudentsInLocalStorage(studentsData)
  }

  async deleteById(id) {
    const studentsData = this.getStudentsFromLocalStorage()

    this.setStudentsInLocalStorage(studentsData.filter(student => student.id !== id))
  }

  async updateById(studentObj) {
    const studentsData = this.getStudentsFromLocalStorage()

    const students = studentsData.map(student => {
      if (student.id !== studentObj.id) {
        return student
      }

      student.name = studentObj.name
      student.dob = studentObj.dob
      student.class = studentObj.class
      student.gender = studentObj.gender
      student.mobileNo = studentObj.mobileNo

      return student
    })

    this.setStudentsInLocalStorage(students)
  }

  async getStudentsBySearchTerm(keyword) {
    const studentsData = this.getStudentsFromLocalStorage()

    return studentsData.filter(student => student.name.toLowerCase().includes(keyword) || String(student.id).toLowerCase().includes(keyword))
  }
}

module.exports = new StudentService()
