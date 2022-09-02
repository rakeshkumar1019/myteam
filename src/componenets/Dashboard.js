import React,{useState} from 'react'
import Navbar from './Navbar'
import Table from './Table'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../css/style.css"
import BarGraph from './BarGraph';
import NewTicket from './NewTicket';
import ViewTicket from './ViewTicket';
function Dashboard() {
let [dateRange,setDateRange]=useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }])

let [addNew,setAddNew] = useState(false);

let handleSelect = (ranges)=>{
    setDateRange([ranges.selection])
}
  return (
    <div>
      <Navbar navbar="dashboard"/>
      {/* <div className="container mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-4 gap-4">
          <div className='container-box'>01</div>
          <div className='container-box'>02</div>
          <div className='container-box'>03</div>
          <div className='container-box'>04</div>
        </div>
      </div> */}
      
     
      {/* <div className="container mx-auto px-4 sm:px-8">
      <br/>
        <div className="">
            <h2 className="text-2xl font-medium leading-tight">Current Sprint</h2><br/>
            <DateRangePicker
                ranges={dateRange}
                onChange={handleSelect}
            />
        </div>
        <div>
            
        </div>
      </div> */}
      {/* <BarGraph/> */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div className='float-left'>
                <h2 className="text-2xl font-medium leading-tight">Release v3.0.15-rc.7</h2>
            </div>
            <div className='float-right'>
                {/* <button 
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 onClick={()=>{setAddNew(!addNew)}}
                >
                   Create Ticket
                </button> */}
                <button 
                 onClick={()=>{setAddNew(!addNew)}}
                 class="group block max-w-xs mx-auto rounded-lg p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div class="flex items-center space-x-3">
                  <svg class="h-4 w-4 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"></path>
                  </svg>
                  <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New Ticket</h3>
                </div>
                <p class="text-slate-500 group-hover:text-white text-sm">Create a new Ticket.</p>
              </button>
            </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>

      { 
        addNew && <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl font-medium leading-tight">Create Ticket</h2>
          <br/>
          <NewTicket/>
        </div>
      }
      
      <ViewTicket/>
      

      <Table/>
      

    </div>
  )
}

export default Dashboard
