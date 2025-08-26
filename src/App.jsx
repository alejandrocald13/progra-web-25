import { useState } from 'react'
import './App.css'
import Table from './Table'

function App() {
  const [filterOption, setFilterOption] = useState('')

  return (
    <>
      <header>
      
        <h2 className='title'>Task Board</h2>
        <div className='filter'>
          <select id="filter" className='filter-opt' value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <svg className='filter-btn' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>
        </div>

      </header>

      <Table filter={filterOption}/>

    </>
  )
}

export default App
