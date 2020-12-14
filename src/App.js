import './App.css';
import { useEffect, useState } from 'react';
import PersonData from './components/PersonData/PersonData';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [personData, setPersonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);

  useEffect(() => {
    fetch('https://classmarker-app.herokuapp.com/mockData')
      .then(res => res.json())
      .then(data => setPersonData(data));
  }, []);

  // Pagination Part
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentPersonData = personData.slice(indexOfFirstData, indexOfLastData);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const previousBtn = pageNumber => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    else {
      alert('This is the first page')
    }
  }
  const nextBtn = pageNumber => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
    else {
      alert('This is the last page!')
    }
  }


  return (
    <div className="App">
      <h1 style={{ color: "#61dafb" }} className="display-4 m-3">React Pagination</h1>
      <Pagination
        dataPerPage={dataPerPage}
        totalData={personData.length}
        paginate={paginate}
        nextBtn={nextBtn}
        previousBtn={previousBtn}
        currentPage={currentPage}
      />
      <PersonData personData={currentPersonData} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={personData.length}
        paginate={paginate}
        nextBtn={nextBtn}
        previousBtn={previousBtn}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
