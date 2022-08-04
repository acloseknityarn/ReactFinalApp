import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
export default function Edit2() {
 const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  contact: "",

   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/applieds/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     position: form.position,
     level: form.level,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
//  <td>{props.record.firstName}</td>
// <td>{props.record.lastName}</td>
// <td>{props.record.address}</td>
// <td>{props.record.email}</td>
// <td>{props.record.contact}</td>
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
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
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}