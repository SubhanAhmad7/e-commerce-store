import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchResult() {

  const [query] = useSearchParams();
  

  const [sp] = useSearchParams();
  console.log(query.get("q"));

  return (
    <div>
      Search Result
      {
        console.log(query.get("q"))
      }
    </div>

  )
}

export default SearchResult