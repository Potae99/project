import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, SVGProps, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {

  const students = [  
    {  
      'ลำดับ': 1,   
      'รหัสรายวิชา': 'xxxxxxxx',   
      'ชื่อไทย': 'xxxxxxxx',
      'การกระทำ' :'xxxxxxxx'
    },  
    {  
      'ลำดับ': 2,   
      'รหัสรายวิชา': 'xxxxxxxx',   
      'ชื่อไทย': 'xxxxxxxx',
      'การกระทำ' :'xxxxxxxx'
    },  
    {  
      'ลำดับ': 3,   
      'รหัสรายวิชา': 'xxxxxxxx',   
      'ชื่อไทย': 'xxxxxxxx',
      'การกระทำ' :'xxxxxxxx'
    },  
  ]; 


  return (
  
    <div className=" flex-col space-y-3 bg-gray-300 block h-screen justify-center p-4" >
      <div className=' flex'>
        <div className=' w-5/6'><h1>ภาคการศึกษา</h1></div>
        <div className=' w-1/6'>
         <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
          บันทึก
         </button> 

        </div>
      </div>
      <div>
        <select>
          <option>รวม/2565</option>
          <option>รวม/2564</option>
          <option>รวม/2563</option>
          <option>รวม/2562</option>
          <option>รวม/2561</option>
        </select>

      </div>
      <h2>รายวิชา </h2>
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr  >
            <th scope="col" className="py-3 px-6" >ลำดับ</th>
            <th scope="col" className="py-3 px-6">รหัสรายวิชา</th>
            <th scope="col" className="py-3 px-6">ชื่อไทย</th>
            <th scope="col" className="py-3 px-6">การกระทำ</th>
         </tr>
       </thead>
       {students.map((student, index) => (
               <tbody>
               <tr data-index={index} className=" hover:bg-green-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
               >
                 <td className="py-4 px-6" >{student.ลำดับ}</td>
                 <td className="py-4 px-6">{student.รหัสรายวิชา}</td>
                 <td className="py-4 px-6">{student.ชื่อไทย}</td>
                 <td className="py-4 px-6">{student.การกระทำ}</td>
               </tr>
               </tbody>

       ))} 

  
     </table>
     <h2 className=' text-center' >****ลำดับเรียงจาก มาก ไป น้อย ปีการศึกษา****</h2>

    </div>
  
  )
}

function EditInactiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

