import {useRef,useState,useEffect} from "react";
import {uplodeFile} from './services/api';
function App() {
  const fileInputRef=useRef();
  const [file,setFile]=useState('');
  const [result,ssetResult]=useState('');
  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let responce=await uplodeFile(data);
        ssetResult(responce.path);
      }

    }
    getImage();
  },[file])
  const onUplode=()=>{
    fileInputRef.current.click();
  }
  return (
    <div className="bg-black w-[100%] h-[100vh] flex items-center justify-center" >
      <div className="w-[60%] h-[70%] bg-white flex items-center flex-col rounded-xl">
        <h1 className=" text-black font-bold text-3xl p-2 ">Simple file sharing !</h1>
        <p className="text-lg p-2">Uplode and share the downlode link.</p>
        <button onClick={()=>onUplode()} className="bg-stone-400 rounded-full p-1 w-20">Uplode</button>
        <input type="file" 
        ref={fileInputRef}
        style={{display:"none"}}
        onChange={(e)=>setFile(e.target.files[0])}
        />
        <div className="p-2 m-2 flex items-center">
          <h1 className=" text-xl font-bold">Download from here :  </h1>
          <a href={result} target="_blank">{result}</a>
        </div>

      </div>

    </div>
  );
}

export default App;
