import { useState } from 'react'
import Nav from './components/Nav'
import News from './components/News'

const App = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Nav filter={filter} setFilter={setFilter} />
      <News filter={filter} />
    </>
  );
};


export default App
