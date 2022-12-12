import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {

  const onclick = async (event: any) => {

    window.location.assign("/adminpage_3")

  };
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
  
    <div className=" flex-col space-y-3 bg-gray-300 block h-full min-h-screen justify-center p-4" >
        <svg onClick={onclick}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" absolute right-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
        <h1>รหัสวิชา      xxxxxxxxxxxxxxxxxxx</h1>
        <p>ชื่อไทย        xxxxxxxxxxxxxxxxxxx</p>
        <p>ชื่ออังกฤษ      xxxxxxxxxxxxxxxxxxx</p>
        <p>รูปแบบ        ผสม</p>
        <p>ภาคการศึกษา   2565</p>
      <Menu as="div" className="relative inline-block  text-left">
        <div>
          <Menu.Button className=" inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            รหัสวิชา
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute inset-0 z-50   left-0 mt-3 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 bg-orange-100 rounded-lg ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    xxxxxxxxxxx
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    xxxxxxxxxxx
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 bg-orange-100 rounded-lg">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    xxxxxxxxxxx
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    xxxxxxxxxxx
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 bg-orange-100 rounded-lg">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    xxxxxxxxxxx
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      
      <div>
            <select>
                <option>รวม/2565</option>
                <option>รวม/2564</option>
                <option>รวม/2563</option>
                <option>รวม/2561</option>
                <option>รวม/....</option>
            </select>
        </div>
        <div className='overflow-x-auto relative'> 
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
        </div>
     <h3>
      กดแล้วเด้งรายระเอียดนักเรียน
     </h3>

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

