class ReportService {
  getReportsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('reports')) || []
  }

  setReportsInLocalStorage(reports) {
    localStorage.setItem('reports', JSON.stringify(reports))
  }

  async getReports() {
    // const reportDataDummy = [
    //   {
    //     id: 'fc4a0716-10f6-453f-88c6-789585ab0fc6',
    //     studentId: 'c91543e4-551c-4745-8db5-c8aa0e52e4c4',
    //     year: '2019',
    //     report: [
    //       { 'subject': 'Hindi', 'total': 100, 'obtain': 74 },
    //       { 'subject': 'maths', 'total': 100, 'obtain': 88 },
    //       { 'subject': 'sanskrit', 'total': 100, 'obtain': 12 },
    //       { 'subject': 'gujarati', 'total': 100, 'obtain': 99 },
    //       { 'subject': 'science', 'total': 100, 'obtain': 99 },
    //       { 'subject': 'english', 'total': 100, 'obtain': 99 } ]
    //   },
    //   {
    //     id: '84dd450e-d4c6-43f1-81a0-37ff5e866454',
    //     studentId: 'dc715bc9-4131-484a-aad7-fba62a296ba1',
    //     year: '2022',
    //     report: [
    //       { 'subject': 'Hindi', 'total': 100, 'obtain': 80 },
    //       { 'subject': 'maths', 'total': 100, 'obtain': 75 },
    //       { 'subject': 'sanskrit', 'total': 100, 'obtain': 57 },
    //       { 'subject': 'gujarati', 'total': 100, 'obtain': 80 },
    //       { 'subject': 'science', 'total': 100, 'obtain': 75 },
    //       { 'subject': 'english', 'total': 100, 'obtain': 44 } ]
    //   },
    //   {
    //     id: 'c8381730-06ff-453e-b514-eec7971a72de',
    //     studentId: 'e485361a-c41c-4902-86b3-4e6013d45186',
    //     year: '2023',
    //     report: [
    //       { 'subject': 'Hindi', 'total': 100, 'obtain': 80 },
    //       { 'subject': 'maths', 'total': 100, 'obtain': 88 },
    //       { 'subject': 'sanskrit', 'total': 100, 'obtain': 86 },
    //       { 'subject': 'gujarati', 'total': 100, 'obtain': 99 },
    //       { 'subject': 'science', 'total': 100, 'obtain': 99 },
    //       { 'subject': 'english', 'total': 100, 'obtain': 99 } ]
    //   },
    //   {
    //     id: 'e684b73a-e351-46d8-b100-37bcf15eeee8',
    //     studentId: '04ad2f49-437b-4b29-8f6c-2ae6320e5fbe',
    //     year: '2022',
    //     report: [
    //       { 'subject': 'Hindi', 'total': 100, 'obtain': 80 },
    //       { 'subject': 'maths', 'total': 100, 'obtain': 45 },
    //       { 'subject': 'sanskrit', 'total': 100, 'obtain': 86 },
    //       { 'subject': 'gujarati', 'total': 100, 'obtain': 99 },
    //       { 'subject': 'science', 'total': 100, 'obtain': 99 },
    //       { 'subject': 'english', 'total': 100, 'obtain': 99 } ]
    //   },
    //   {
    //     id: '663d4c7c-9d87-4eb0-8983-d3d631326f4e',
    //     studentId: 'dc715bc9-4131-484a-aad7-fba62a296ba1',
    //     year: '2019',
    //     report: [
    //       { 'subject': 'Hindi', 'total': 100, 'obtain': 64 },
    //       { 'subject': 'maths', 'total': 100, 'obtain': 85 },
    //       { 'subject': 'sanskrit', 'total': 100, 'obtain': 86 },
    //       { 'subject': 'gujarati', 'total': 100, 'obtain': 58 },
    //       { 'subject': 'science', 'total': 100, 'obtain': 64 },
    //       { 'subject': 'english', 'total': 100, 'obtain': 58 } ]
    //   },
    //   { 'id': 'e6a581c7-ce24-4bf2-8ed3-fe42b5db89b6', 'studentId': '04ad2f49-437b-4b29-8f6c-2ae6320e5fbe', 'year': '2020', 'report': [ { 'subject': 'hindi', 'total': 100, 'obtain': 58 } ] },
    //   {
    //     id: '4af4407a-cdac-4d88-8dc6-d16bc28045d3',
    //     studentId: '05a1039a-58fb-4f17-8c70-c7e1f5ddf0b9',
    //     year: '2022',
    //     report: [ { 'subject': 'hindi', 'total': 100, 'obtain': 89 }, { 'subject': 'maths', 'total': 100, 'obtain': 48 }, { 'subject': 'gujarati', 'total': 100, 'obtain': 69 } ]
    //   },
    //   {
    //     id: 'e99af2ae-8b87-44c9-bef3-7d84c8cacee6',
    //     studentId: 'c91543e4-551c-4745-8db5-c8aa0e52e4c4',
    //     year: '2022',
    //     report: [ { 'subject': 'hindi', 'total': 100, 'obtain': 89 }, { 'subject': 'sanskrit', 'total': 100, 'obtain': 85 }, { 'subject': 'maths', 'total': 100, 'obtain': 99 } ]
    //   },
    //   { 'id': '20357de5-df03-4b5b-a6dd-068bff57c08b', 'studentId': '04ad2f49-437b-4b29-8f6c-2ae6320e5fbe', 'year': '2019', 'report': [ { 'subject': 'hindi', 'total': 100, 'obtain': 50 } ] },
    //   {
    //     id: '68890770-2a6a-4175-aa25-e2dfe1d61949',
    //     studentId: 'c91543e4-551c-4745-8db5-c8aa0e52e4c4',
    //     year: '2020',
    //     report: [ { 'subject': 'hindi', 'total': 100, 'obtain': 85 }, { 'subject': 'maths', 'total': 100, 'obtain': 58 } ]
    //   },
    //   {
    //     id: '49d84814-3d37-47bb-90c4-ef5b6285f1d1',
    //     report: [ { 'subject': 'hindi', 'total': 100, 'obtain': 89 }, { 'subject': 'stevan', 'total': 100, 'obtain': 84 }, { 'subject': 'hindi-second', 'total': 100, 'obtain': 80 } ],
    //     year: '2018',
    //     studentId: 'e485361a-c41c-4902-86b3-4e6013d45186'
    //   },
    //   {
    //     id: '6a32a21d-b01e-4ec6-8621-ff62d508d34c',
    //     studentId: '05a1039a-58fb-4f17-8c70-c7e1f5ddf0b9',
    //     year: '2020',
    //     report: [ { 'subject': 'study1', 'total': 100, 'obtain': 80 }, { 'subject': 'study2', 'total': 100, 'obtain': 90 } ]
    //   },
    //   {
    //     id: '79674b68-5c57-47b1-8ee1-e13fc3b00c43',
    //     report: [ { 'subject': 'maths', 'total': 100, 'obtain': 70 }, { 'subject': 'english', 'total': 100, 'obtain': 65 } ],
    //     year: '2018',
    //     studentId: 'f4a4ed13-c35f-4077-9f49-0d9da84f59e1'
    //   }
    // ]

    // this.setReportsInLocalStorage(reportDataDummy)

    return this.getReportsFromLocalStorage()
  }

  getReportById(id) {
    const reports = this.getReportsFromLocalStorage()

    return reports.find(report => report.id && report?.id === id)
  }

  deleteById(reportId) {
    const reports = this.getReportsFromLocalStorage()

    this.setReportsInLocalStorage(reports.filter(report => report.id !== reportId))
  }

  updateReport(id, reportObj) {
    const reports = this.getReportsFromLocalStorage()

    const updatedReports = reports.map(reportData => {
      if (reportData.id === id) {
        reportData.report = reportObj.report
        reportData.year = reportObj.year
        reportData.studentId = reportObj.studentId

        return reportData
      }

      return reportData
    })

    this.setReportsInLocalStorage(updatedReports)
  }

  save(report) {
    const reports = this.getReportsFromLocalStorage()

    reports.push(report)
    this.setReportsInLocalStorage(reports)
  }
}

module.exports = new ReportService()
