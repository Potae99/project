

export default function Home(){

  const submitContact = async (event) => {

    event.preventDefault();
    console.log(`Username = ${event.target.name.value}?`);
    console.log(`Password = ${event.target.password.value}?`);





  };

  return (
    <>
    {/*container*/}
    <div className=" bg-gray-300 block h-screen items-center justify-center p-4 md:flex md:justify-center">
      {/*login card*/}

      <div className=" bg-current  flex flex-col items-center max-w-screen-lg overflow-y-hidden rounded-lg shadow-lg bg-orange-400 w-full md:flex-row">
        {/*logo*/ }
        <div className=" backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2">
          <h1 className="font-medium text-3xl">มหาวิทยาลัยนเรศวร</h1>
          <p className="italic text-lg">คณะพยาบาลศาสตร์</p>
        </div>

        {/*form*/}

        <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-black text-xl">ยินดีต้อนรับ</h1>
            <p>ลงชื่อเข้าใช้บัญชีของคุณ</p>
          </div>

          {/*inputs*/}
          <form className="flex flex-col items-center space-y-4" onSubmit={submitContact}>
            <div className="relative">
              <input className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300" placeholder="เลขประจำตัวประชาชน..." type="text" id="name" autoComplete="name" required />
            </div>
            <div className="relative">
            <input className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300" placeholder="รหัสผ่าน..." type="password" id="password" autoComplete="password" required />
          </div>
          <button className=" bg-orange-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-300" type="submit">
           <a href="/adminpage">เข้าสู่ระบบ</a>
          </button>
          </form>
        </div>
      </div>
    </div>


    </>
  )
}
