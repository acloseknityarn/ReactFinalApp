import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create1() {
 const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  contact: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/leaves/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({  firstName: "", lastName: "", address: "", email: "", contact: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New leaves</h3>
     <form onSubmit={onSubmit}>
     <div className="form-group">
         <label htmlFor="firstName">firstName: </label>
         <input
           type="text"
           className="form-control"
           id="firstName"
           value={form.firstName}
           onChange={(e) => updateForm({ firstName: e.target.value })}
         />
         <label htmlFor="lastName">lastName: </label>
         <input
           type="text"
           className="form-control"
           id="lastName"
           value={form.lastName}
           onChange={(e) => updateForm({ lastName: e.target.value })}
         />
         <label htmlFor="address">address: </label>
         <input
           type="text"
           className="form-control"
           id="address"
           value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })}
         />
         <label htmlFor="email">email: </label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
         <label htmlFor="name">contact: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.contact}
           onChange={(e) => updateForm({ contact: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}