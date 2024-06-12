import DSAList from "./DSAList"; 
  
export default function App() 
{ 
    return ( 
        <> 
            <div className="flex flex-col justify-center items-center mt-4"> 
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-3xl mb-6"> 
                    Full stack Tracker 
                </h1> 
                <DSAList/> 
            </div> 
        </> 
    ); 
}
