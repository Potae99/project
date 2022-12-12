export default function subjects(){


  
    
    return ( <> 
        <div className=" bg-gray-300 block h-full min-h-screen justify-center p-4">

          <div>
            <h1>รหัสวิชา</h1>
            <input className="border border-gray-300 outline-none  pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"  type="text" id="name" autoComplete="name" required />
          </div>
          <div>
            <h2>ชื่อไทย</h2>
            <input className="border border-gray-300 outline-none pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"  type="text" id="name" autoComplete="name" required />
          </div>
          <div>
            <h3>ชื่ออังกฤษ</h3>
            <input className="border border-gray-300 outline-none pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"  type="text" id="name" autoComplete="name" required />
          </div>
          <div>
            <h4>รูปแบบ</h4>
            <select className="border outline-none pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300">
              <option>บรรยาย</option>
              <option>ปฎิบัติ</option>
              <option>ผสม</option>
            </select>
          </div>
          <div className=" relative">
            <button className=" absolute  left-0 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                กลับ
            </button>
            <button className=" absolute  right-0 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                บันทึก
            </button>
            

          </div>



        </div>

  
  
        
        
        
  
  
        
  
  

  
      </>
      )
    }
    