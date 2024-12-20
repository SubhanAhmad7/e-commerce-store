import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SearchForm = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const startSearch = () => {
    navigate(`/search?q=${value}&c=pak`);

  }

  return (
    <div className='container d-flex mt-5 mb-5'>
      <input className="form-control p-3 mt-5 rounded-start-pill" type='text' onChange={(e) => { setValue(e.target.value) }} />
      <button className="btn btn-success border mt-5 rounded-end-pill p-3" onClick={startSearch}>Search</button>
    </div>
  )
}

export default SearchForm