import React from 'react'

const create = () => {
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
  return (
    <div className='p-10'>
        <h1 className='text-5xl font-bold'>Create New Nft</h1>
        <p>You can set preferred display name,create your profile URL and manage other personal settings.</p>
        <div>
            <p className='font-bold text-3xl'>Image,video,audio or 3 d model</p>
            <p>File types supported JPG,PNG,GIF,SVG,MP4,WEBM,MP3,WAV,OGG</p>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Item Name:</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Discription</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69" />
        </div>
        <div className='flex justify-end'>
            <button className="bg-black  text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black ">
              Create
            </button>
          </div>
    </div>
  )
}

export default create