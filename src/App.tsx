import {useEffect, useState} from "react";
import axios from "axios";
import MyComponent from './components/MyComponent';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/test')
        .then((res) => {
          setHello(res.data);
        })
  }, []);
  return (
      <div className="App">
        백엔드 데이터 : {hello}
        <MyComponent title="Hello, TypeScript" description="This is a TypeScript React component!" />
      </div>
  );
}

export default App;



