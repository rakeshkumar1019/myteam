import React,{useState} from 'react'
import Navbar from './Navbar'
import Table from './Table'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../css/style.css"
function Dashboard() {
let [dateRange,setDateRange]=useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }])

let handleSelect = (ranges)=>{
    setDateRange([ranges.selection])
}
  return (
    <div>
      <Navbar navbar="dashboard"/>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div className='float-left'>
                <h2 className="text-2xl font-semibold leading-tight">Release v3.0.15-rc.7</h2>
            </div>
            <div className='float-right'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New
                </button>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="">
            <p>Current Sprint</p>
            <DateRangePicker
                ranges={dateRange}
                onChange={handleSelect}
                showDateDisplay={dateRange}
            />
        </div>
      </div>

      <Table/>
      

    </div>
  )
}

export default Dashboard
