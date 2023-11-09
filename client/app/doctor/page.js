"use client";
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const column = [
    {field: 'id', headerName: 'ID', width:90 },
    {field: 'date', headerName: "Visit date", width: 150 },
    {field: 'doctor', headerName: "Doctor Visited", width: 200},
    {field: 'desc', headerName: "Prescription", width: 500 }
]

const rows = [
    {id: 1, date: "27/12/2021",doctor: "Dr. Midhun",desc: "High Fever around 200 "}
]

const page = () => {
    const patient_id = useState("");

    const fetchdata = async(e) => {
        e.preventDefault();

    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10  w-full items-center font-mono text-sm lg:flex">
                <div>
                    <h1>Welcome Doctor</h1>                    
                    <form id='fetchdata'>
                        <label>Patient ID </label>
                        <input type="number" id="patientid"></input>
                        <br/>
                        <button type='submit'>Search</button>
                    </form>

                    <h1 class="mt-5">Patient Report</h1>
                    <Box sx={{height:400, width: '100%'}}>
                        <DataGrid rows={rows} columns={column} initialState={{ pagination: { paginationModel: { pageSize: 5, }, }, }} pageSizeOptions={[5]} checkboxSelection disableRowSelectionOnClick />
                    </Box>


                </div>
            </div>
        </main>
    )
}

export default page;