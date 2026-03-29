import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5252/api/applications')
      .then(response => response.json())
      .then(data => {
        setApplications(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Kunde inte hämta ansökningar.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Ansökningar</h1>
      {applications.length === 0 ? (
        <p>Inga ansökningar hittades.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Anställd</th>
              <th>Förmån</th>
              <th>Status</th>
              <th>Skapad</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.employeeId}</td>
                <td>{app.benefitId}</td>
                <td>{app.status}</td>
                <td>{new Date(app.createdDate).toLocaleDateString('sv-SE')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;