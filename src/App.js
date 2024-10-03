
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import './index.css';

function App() {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
    <div className="w-full max-w-xs " >
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 mt-20">
        <div className="mb-4 text-center">
  
          <label className="mt-20 block text-gray-700 text-sm font-bold mb-2 mx-2 " htmlFor="username" >
            Username
          </label>
          <input 
            className="shadow-sm appearance-none border rounded py-2 px-2 text-gray-700 leading-none" 
            id="username" 
            type="text" 
            placeholder="Username" 
          />
        </div>


        <div className="mb-4 text-center ">
          <label className="block text-gray-700 text-sm font-bold mb-2 mx-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow-sm appearance-none border rounded py-2 px-2 text-gray-700 leading-none" 
            id="password" 
            type="password" 
            placeholder="******************" 
          /><br/><br/>
          <a className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>


    <div class="flex justify-center space-x-4 text-center mb-2 mx-2 ">
      <button class="mx-2 btn btn-primary" type="button">
        Sign In
      </button>
      <button class="btn btn-primary" type="button">
        Sign In
      </button>
    </div>
        
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
    </div>
  );
}

export default App;
