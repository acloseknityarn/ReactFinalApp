import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
import Navbar1 from "./components1/navbar";
import RecordList1 from "./components1/recordList";
import Edit1 from "./components1/edit";
import Create1 from "./components1/create";

import Navbar2 from "./components2/navbar";
import RecordList2 from "./components2/recordList";
import Edit2 from "./components2/edit";
import Create2 from "./components2/create";

import Navbar3 from "./components3/navbar";
import RecordList3 from "./components3/recordList";
import Edit3 from "./components3/edit";
import Create3 from "./components3/create";

import Navbar4 from "./components4/navbar";
import RecordList4 from "./components4/recordList";
import Edit4 from "./components4/edit";
import Create4 from "./components4/create";


function App() {
 return (
   <div>
     <Navbar/>
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
    <Navbar1/>
   <Routes>
     <Route exact path="/" element={<RecordList1 />} />
     <Route path="/edit/:id" element={<Edit1 />} />
     <Route path="/create" element={<Create1 />} />
   </Routes>
   <Navbar2/>
   <Routes>
     <Route exact path="/" element={<RecordList2 />} />
     <Route path="/edit/:id" element={<Edit2 />} />
     <Route path="/create" element={<Create2 />} />
   </Routes>
   <Navbar3/>
   <Routes>
     <Route exact path="/" element={<RecordList3 />} />
     <Route path="/edit/:id" element={<Edit3 />} />
     <Route path="/create" element={<Create3 />} />
   </Routes>
   <Navbar4/>
   <Routes>
     <Route exact path="/" element={<RecordList4 />} />
     <Route path="/edit/:id" element={<Edit4 />} />
     <Route path="/create" element={<Create4 />} />
   </Routes>
   </div>
 );
};
 
export default App;