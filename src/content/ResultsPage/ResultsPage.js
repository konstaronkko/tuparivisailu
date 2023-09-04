import React, { useEffect, useState } from "react";
import { DataTable, Table, TableHead, TableBody,TableRow, TableHeader, TableCell } from "@carbon/react";
 
//const Record = (props) => (
// <tr>
//   <td>{props.record.nickname}</td>
//   <td>{props.record.email}</td>
//   <td>{props.record.score}</td>
// </tr>
//);

const headers = [
  {
    key: 'nickname',
    header: 'Nimimerkki'
  },
  {
    key: 'email',
    header: 'Sähköposti',
  },
  {
    key: 'score',
    header: 'Pisteet'
  }
]
 
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
     records.map((record => {
      record.id = record._id
     }));
     setRecords(records);
   }
 
   getRecords();
   console.log(records); 
   return;
 }, [records.length]);
 
 
 //// This method will map out the records on the table
 //function recordList() {
 //  return records.map((record) => {
 //    return (
 //      <Record
 //        record={record}
 //        key={record._id}
 //      />
 //    );
 //  });
 //}
 
 return (
  <div>
    <h3>Tulostaulu</h3>
    <DataTable isSortable rows={records} headers={headers}>
  {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow {...getRowProps({ row })}>
            {row.cells.map((cell) => (
              <TableCell key={cell.id}>{cell.value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )}
</DataTable>
  </div>
 );

 // This following section will display the table with the records of individuals.
 //return (
 //  <div>
 //    <h3>Tulostaulu</h3>
 //    <table className="table table-striped" style={{ marginTop: 20 }}>
 //      <thead>
 //        <tr>
 //          <th>Nimimerkki</th>
 //          <th>Sähköposti</th>
 //          <th>Pisteet</th>
 //        </tr>
 //      </thead>
 //      <tbody>{recordList()}</tbody>
 //    </table>
 //  </div>
 //);
}
