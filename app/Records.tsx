'use client'
import {RecordDataType} from "@/app/RecordDataType";
import {useEffect, useState} from "react";
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

    const[recordsToShow, setRecordsToShow] : [RecordDataType[], any] = useState([]);

    const [currentPage, setCurrentPage] : [number, any] = useState(0);
    const [rowsPerPage, setRowsPerPage] : [number, any] = useState(1);
    useEffect(() => {
        let start = currentPage * rowsPerPage;
        let end = start + rowsPerPage;
        setRecordsToShow(records.slice(start, end));

    }, [currentPage, records, rowsPerPage]);

    return(
        <div>
            {recordsToShow.map((value, index)=>{
                return <Record key={index} date={value.getDate()} time={value.getTime()} name={value.getName()}/>
            })}
            <div className="flex items-center justify-center h-20 space-x-3.5">
                <div className={"flex items-center justify-center h-10 space-x-1.5"}>
                    <button className={`w-15 h-10 text-black`}
                            onClick={()=>{setCurrentPage(currentPage > 0 ? currentPage-1 : 0)}}>{"<<prev"}</button>
                    <button style={{borderRadius: "5px", borderWidth: "2px", borderColor:"black"}}
                            className={`w-10 h-10 text-black ${currentPage==0? 'bg-orange-400' : 'bg-white'}`}
                            onClick={()=>{setCurrentPage(0)}}>1</button>
                    <button style={{borderRadius: "5px", borderWidth: "2px", borderColor:"black"}}
                            className={`w-10 h-10 text-black ${currentPage==1? 'bg-orange-400' : 'bg-white'}`}
                            onClick={()=>{setCurrentPage(1)}}>2</button>
                    <button style={{borderRadius: "5px", borderWidth: "2px", borderColor:"black"}}
                            className={`w-10 h-10 text-black ${currentPage==2? 'bg-orange-400' : 'bg-white'}`}
                            onClick={()=>{setCurrentPage(2)}}>3</button>
                    <button style={{borderRadius: "5px", borderWidth: "2px", borderColor:"black"}}
                            className={`w-10 h-10 text-black ${currentPage==3? 'bg-orange-400' : 'bg-white'}`}
                            onClick={()=>{setCurrentPage(3)}}>4</button>
                    <button style={{borderRadius: "5px", borderWidth: "2px", borderColor:"black"}}
                            className={`w-10 h-10 text-black ${currentPage==4? 'bg-orange-400' : 'bg-white'}`}
                            onClick={()=>{setCurrentPage(4)}}>5</button>
                    <button className={`w-15 h-10 text-black`}
                            onClick={()=>{setCurrentPage(currentPage < 4 ? currentPage+1 : 4)}}>{"next>>"}</button>
                </div>
                <div className={"flex items-center justify-center h-10 space-x-1.5"}>
                    <label className={"text-black"}>{"Rows per page    "}
                        <select className={"w-14 text-center"} style={{borderRadius: "5px", borderWidth: "2px", borderColor:"black"}}
                        onChange={(e)=>{setRowsPerPage(Number.parseInt(e.target.value))}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select></label>
                </div>
            </div>
        </div>

    )
}