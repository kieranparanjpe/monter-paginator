import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={"content-center text-center justify-center bg-white drop-shadow-lg"}
           style={{margin: "5%", width: "90%", height: "90%", borderRadius: "20px"}}>
          <div className="flex items-center justify-items-center w-full h-20">
              <h2 className="text-black" style={{paddingInline: "1vw", flex: "1"}}>Recently Generated Reports</h2>
              <img style={{paddingInline: "1vw",borderRadius: "10%"}} alt={"filter"} src={"https://img.icons8.com/ios/50/filter--v1.png"}></img>
              <img style={{paddingInline: "1vw",borderRadius: "10%"}} alt={"filter"} src={"https://img.icons8.com/ios/50/delete-sign--v1.png"}></img>
          </div>

          <div className="flex items-center justify-between full h-10 bg-gray-300">
              <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>Date</p>
              <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "4"}}>Report Name</p>
              <p className="text-left align-middle text-black" style={{paddingInline: "1vw", flex: "1"}}>Download</p>
          </div>
      </div>

    </main>
  );
}
