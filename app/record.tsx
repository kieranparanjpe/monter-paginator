'use client'

export default function Record({key, name, date, time} : {key: number, name: String, date : String, time : String})
{
    return (
        <div className="flex items-center justify-between full h-15">
            <div style={{paddingInline: "1vw", flex: "1"}}>
                <p className="text-left align-middle text-black">{date}</p>
                <p className="text-left align-middle text-gray-500 text-sm" >{time}</p>

            </div>
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "4"}}>{name}</p>

            <div className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>
                <img style={{marginLeft: "27px"}} width="25" height="25" src="https://img.icons8.com/ios/50/download--v1.png" alt="download--v1"/>
            </div>
        </div>
    );
}