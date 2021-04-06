import React from "react"

export default function Category({categories, filterItems}) {
  return(
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button 
            type="button" 
            key={index} 
            className="filter-btn"
            onClick={() => filterItems(category)}
          >{category} </button>
        )
      })}
    </div>
  )
}