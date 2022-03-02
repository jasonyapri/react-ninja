const Home = () => {

  const handleClick = (e) => {
    console.warn('handleClick', e);
  }

  const handleClickAgain = (name, e)=> {
    console.log('hello ' + name, e)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => {handleClickAgain('Jason', e)}}>Click me again</button>
    </div>
  );
}

export default Home;