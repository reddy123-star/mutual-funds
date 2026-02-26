import Nav from '../components/Nav'
import ProtectedRoute from '../components/ProtectedRoute'

function AnalystContent(){
  return (
    <div>
      <Nav />
      <main style={{padding:20}}>
        <h2>Data Analyst</h2>
        <p>Analyze trends, update fund performance data, and generate reports. (Scaffold)</p>
        <p>Possible actions: upload CSV, refresh performance, run cohort analysis.</p>
      </main>
    </div>
  )
}

export default function Analyst(){
  return (
    <ProtectedRoute roles={["Analyst"]}>
      <AnalystContent />
    </ProtectedRoute>
  )
}
