import Form from './Form';
import { useEffect, useState } from 'react'
// import ListItem from './ListItem';
import Tabel from './Tabel';

function App() {
  const [reqType, setReqType] = useState('users');
  const[data, setData] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(()=>{
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`)
        const listItems = await response.json();
        setData(listItems);
        // console.log(listItems)
        
      }catch(err){
        console.error(err);
      }
      
    }
    (async ()=>fetchItems())()
  },
   [reqType]
  )
  return (
    <div className="App">
      <Form reqType ={reqType}
    setReqType={setReqType}
      />
      {/* <ListItem
      data ={data}
      /> */}
      <Tabel  data ={data} />
    </div>
  );
}

export default App;
