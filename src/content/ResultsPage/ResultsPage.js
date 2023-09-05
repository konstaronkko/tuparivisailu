import React, { useEffect, useState } from "react";
import { DataTable, Table, TableHead, TableBody,TableRow, TableHeader, TableCell, Stack } from "@carbon/react";
 

const headers = [
  {
    key: 'score',
    header: 'Pisteet'
  },
  {
    key: 'nickname',
    header: 'Nimimerkki'
  },
  //{
  //  key: 'email',
  //  header: 'Sähköposti',
  //}
]
 
export default function ResultsPage() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:8080/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     records.map((record => {
      return(record.id = record._id);
     }));
     records.sort((a, b) => b.score - a.score);
     setRecords(records);
   }
   console.log(records);
   getRecords();
   const interval=setInterval(()=>{
    getRecords();
   }, 30000)
   return ()=>clearInterval(interval);
 }, [records.length]);
 

 
 return (
  <div>
    <Stack gap={7}>
    <h3>Tulostaulu</h3>
    <div>Päivän paras tulos voittaa! Mutta älä huoli jos tuloksesi ei aivan yltä, muiden kesken arvotaan myös palkinto.</div>
    <DataTable rows={records} headers={headers}>
  {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            header.key==='score'?<TableHeader {...getHeaderProps({ header, isSortable: true, isSortHeader: true, sortDirection: 'DESC' })}>
              {header.header}
            </TableHeader>:<TableHeader {...getHeaderProps({ header })}>
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
</Stack>
  </div>
 );
}
