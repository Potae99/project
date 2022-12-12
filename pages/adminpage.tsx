import React from "react";
export default function Homepage0(){

  const onclick = async (_event: any) => {

    window.location.assign("/adminpage_1")

  };

  const   subjects =[
    {
      'ลำดับ' : 1,
      'รหัสรายวิชา':'xxxxxx',
      'ชื่อไทย' :'xxxxxx',
      'ผล':'xxxxxx',
    },
    {
      'ลำดับ' : 2,
      'รหัสรายวิชา':'xxxxxx',
      'ชื่อไทย' :'xxxxxx',
      'ผล':'xxxxxx',

    },
    {
      'ลำดับ' : 3,
      'รหัสรายวิชา':'xxxxxx',
      'ชื่อไทย' :'xxxxxx',
      'ผล':'xxxxxx',

    },
    {
      'ลำดับ' : 4,
      'รหัสรายวิชา':'xxxxxx',
      'ชื่อไทย' :'xxxxxx',
      'ผล':'xxxxxx',

    },
    {
      'ลำดับ' : 5,
      'รหัสรายวิชา':'xxxxxx',
      'ชื่อไทย' :'xxxxxx',
      'ผล':'xxxxxx',

    },
  ];

  const professor =[
    {
      'ลำดับ' : 1,
      'ชื่อสกุล':'xxxxxx',
      'ผลการปรรยาย' :'xxxxxx',
      'ผลการปฎิบัติ ':'xxxxxx',

    },
    {
      'ลำดับ' : 2,
      'ชื่อสกุล':'xxxxxx',
      'ผลการปรรยาย' :'xxxxxx',
      'ผลการปฎิบัติ ':'xxxxxx',

    },
    {
      'ลำดับ' : 3,
      'ชื่อสกุล':'xxxxxx',
      'ผลการปรรยาย' :'xxxxxx',
      'ผลการปฎิบัติ ':'xxxxxx',

    },
    {
      'ลำดับ' : 4,
      'ชื่อสกุล':'xxxxxx',
      'ผลการปรรยาย' :'xxxxxx',
      'ผลการปฎิบัติ ':'xxxxxx',

    },
    {
      'ลำดับ' : 5,
      'ชื่อสกุล':'xxxxxx',
      'ผลการปรรยาย' :'xxxxxx',
      'ผลการปฎิบัติ ':'xxxxxx',
      
    },
  ];
    

  return ( <> 
  <div className=" bg-gray-300 block min-h-screen  h-full justify-center p-4  flex-col space-y-2 ">
    <h1>ผลการประเมิน</h1>
    <p>รายวิชา</p>
    <div className=" overflow-x-auto relative">
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr  >
            <th scope="col" className="py-3 px-6" >ลำดับ</th>
            <th scope="col" className="py-3 px-6">รหัสรายวิชา</th>
            <th scope="col" className="py-3 px-6">ชื่อไทย</th>
            <th scope="col" className="py-3 px-6">ผล</th>
         </tr>
       </thead>
       {subjects.map((subjects, index) => (
        <tbody>
         <tr className= " hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
         onClick={onclick}>
            <td className="py-4 px-6" >{subjects.ลำดับ}</td>
            <td className="py-4 px-6">{subjects.รหัสรายวิชา}</td>
            <td className="py-4 px-6">{subjects.ชื่อไทย}</td>
            <td className="py-4 px-6">{subjects.ผล}</td>
          </tr>
        </tbody>
       ))}
     </table>
    </div>
    <h2>อาจาร์ย</h2>
    <div className=" overflow-x-auto relative">
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr >
            <th scope="col" className="py-3 px-6" >ลำดับ</th>
            <th scope="col" className="py-3 px-6">ชื่อ-สกุล</th>
            <th scope="col" className="py-3 px-6">ผลการปรรยาย</th>
            <th scope="col" className="py-3 px-6">ผลการปฎิบัติ</th>
         </tr>         
       </thead>
       {professor.map((professor, index) => (
        <tbody>
         <tr className= " hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
         onClick={onclick}>
            <td className="py-4 px-6" >{professor.ลำดับ}</td>
            <td className="py-4 px-6">{professor.ชื่อสกุล}</td>
            <td className="py-4 px-6">{professor.ผลการปรรยาย}</td>
            <td className="py-4 px-6">{professor["ผลการปฎิบัติ "]}</td>
          </tr>
        </tbody>
       ))}
     </table>
    </div>
  </div>
  
  </>
  )
}
