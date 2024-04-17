'use client'

export default function Record()
{
    return (
        <div className="flex items-center justify-between full h-10 bg-gray-300">
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>Date</p>
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "4"}}>Report Name</p>
            <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>Download</p>
        </div>
    );
}