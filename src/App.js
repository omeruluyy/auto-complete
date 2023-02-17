import "./index.css"
import { useState, useEffect ,useRef} from "react";
import axios from "axios"
import { getData } from "./utils/fetchData";
import SearchResultItem from "./components/SearchResultItem";
import SceletonLoader from "./components/SceletonLoader";


function App() {
   // { id: 1, title: "Ömer" }, { id: 2, title: "Öncü" }, { id: 3, title: "Ahmet" }, { id: 4, title: "Ali 2" },

  const  [db,setDb]=useState([]);
  
  const [value, setValue] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false)  ;
  const isTyping=value.replace(/\s+/,'').length>0;
  const ref=useRef();


  useEffect(() => {
   
    document.addEventListener('mousedown',handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside);
    }
  }, [])
  useEffect(() => {
		console.log(loading)
	}, [loading])


  const handleClickOutside=(e)=>{
     if(ref.current && !ref.current.contains(e.target)){
      setResult('')
     }

  }
  
  async function getUser() {
    try {
      
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setDb(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    setLoading(true)
    getUser();

    if (isTyping)
      setResult(db.filter(f => f.title.toLowerCase().includes(value.toLowerCase())));
    else
      setResult(false);

    setLoading(false) 
    
  }, [value])

  return (

    <>
      <div className="search" ref={ref} >
        <input type="text" className={isTyping?'typing':null} onChange={(e) => { setValue(e.target.value) }} placeholder="Bir şeyler yaz" />
        { isTyping &&(
          <div className="search-result"> 
            {result && result.map(m=>(
              <SearchResultItem item={m}/>
              
            ))}
          </div>
          
        )}
        {loading &&  <SceletonLoader />}
        {!result  && !loading &&
          <div>Sonuç bulunamadı</div>
        }
      </div>
    </>

  );
}

export default App;
