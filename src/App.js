import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Reports from './pages/Reports'
import Student from './pages/Student'
import StudentList from './pages/StudentList'
import Report from './pages/Report'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="reports" element={<Reports/>}/>
            <Route path="report/:id" element={<Report/>}/>
            <Route path="report/add" element={<Report/>}/>
            <Route path="students" element={<StudentList/>}/>
            <Route path="student/add" element={<Student/>}/>
            <Route path="student/:studentId" element={<Student/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
