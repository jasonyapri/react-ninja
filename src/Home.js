import { useState } from 'react';

const Home = () => {

  // let name = 'mario';
  const [name, setName] = useState('Jason');
  const [age, setAge] = useState(27);

  const handleClick = () => {
    setName('Luigi')
    setAge(30)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;