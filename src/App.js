import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import Team from "./componenets/Team";
import Project from "./componenets/Project";
import CreateTicket from "./componenets/CreateTicket";
import GiveReviewForm from "./componenets/GiveReviewForm";
function App() {
  return (
    <Router>
      <div>
        <Routes>
         <Route exect  path="/" element={<Dashboard/>}/>
         <Route exect  path="/team" element={<Team/>}/>
         <Route exect  path="/project" element={<Project/>}/>
         <Route exect  path="/create/ticket" element={<CreateTicket/>}/>
         <Route exect  path="/reviews" element={<GiveReviewForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
