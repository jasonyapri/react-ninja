import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

const Clock = () => {

  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // console.log('useEffect')

    let timer = setInterval(() => {
      // console.log('setInterval')
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testAction = () => {
    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('root2')
    );
  }

  return ( 
    <div>
      <h1>Hello, World!</h1>
      <h2>It is { date }</h2>
      <button onClick={testAction}>test</button>
      <div id="root2"></div>
    </div>
  );
}

export default Clock;