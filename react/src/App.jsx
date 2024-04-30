import {useEffect, useState} from 'react'
import { getClientData } from './data'
import AGTable from './datatable'


function handleError(err) {
  /* We could do more with error handling including
    - redirect to an OOPs page
    - surface some type of banner notification that went wrong
  */
  console.log("Error occured fetching data", err)
}

function App() {
  const [clientData, setClientData] = useState([])

  useEffect(() => {
    getClientData()
    .then(data => {
      setClientData(data);
    }).catch(err => handleError(err));
  }, [])

  return (
    <div>
      <AGTable rowData={clientData}/>
    </div>
  )
}

export default App
