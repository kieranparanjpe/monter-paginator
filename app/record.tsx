'use client'

export default function Record({key, name, date, time} : {key: number, name: String, date : String, time : String})
{
    return (
        <div className="flex items-center justify-between full h-15">
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>{date}</p>
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "4"}}>{name}</p>
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>Download</p>
        </div>
    );
}