'use client'
import {RecordDataType} from "@/app/RecordDataType";
import {useState} from "react";
import Record from "@/app/record";

export default function Records()
{
    let records : RecordDataType[] =
        [new RecordDataType("2024/04/04", "16:03 PM", "record1.csv"),
            new RecordDataType("2024/04/05", "18:04 PM", "record2.csv"),
            new RecordDataType("2024/04/03", "13:05 PM", "record3.csv"),
            new RecordDataType("2024/04/07", "17:07 PM", "record4.csv"),
            new RecordDataType("2024/04/10", "14:02 PM", "record5.csv"),
            new RecordDataType("2024/04/14", "16:04 PM", "record6.csv"),
            new RecordDataType("2024/04/15", "15:08 PM", "record7.csv"),
            new RecordDataType("2024/04/01", "16:45 PM", "record8.csv"),
            new RecordDataType("2024/04/02", "13:33 PM", "record9.csv"),
            new RecordDataType("2024/04/03", "16:43 PM", "record10.csv"),
            new RecordDataType("2024/04/04", "12:10 PM", "record11.csv"),
            new RecordDataType("2024/04/04", "16:03 PM", "record12.csv"),]

    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    return(
        <div>
            {records.map((value, index)=>{
                return <Record/>
            })}
        </div>
    )
}