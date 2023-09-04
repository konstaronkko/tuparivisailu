import React, { useEffect, useState } from "react";
 
const Record = (props) => (
 <tr>
   <td>{props.record.nickname}</td>
   <td>{props.record.email}</td>
   <td>{props.record.score}</td>
 </tr>
);
 
export default function ResultsPage() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5050/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Nimimerkki</th>
           <th>Sähköposti</th>
           <th>Pisteet</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}
