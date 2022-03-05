import { useEffect, useState } from "react";

const Clock = () => {

  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // console.log('useEffect')
    setInterval(() => {
      // console.log('setInterval')
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return ( 
    <div>
      <h1>Hello, World!</h1>
      <h2>It is { date }</h2>
    </div>
  );
}

export default Clock;