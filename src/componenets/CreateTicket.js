import React from 'react'
import Navbar from './Navbar'
import NewTicket from './NewTicket'

function CreateTicket() {
  return (
    <div>
        <Navbar navbar="createTicket"/>
        <div className="container mx-auto px-4 sm:px-8">
          <NewTicket/>
        </div>
    </div>
    
  )
}

export default CreateTicket
