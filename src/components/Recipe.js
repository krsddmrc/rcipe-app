import React from 'react'

const recipe = () => {
  const RES_ID="72a0f322";
  const RES_KEY="3b2513d944bf2659b2bbaba78403c814"
  const query=0

  const  recipeReq=`https://api.edamam.com/search?q=${query}&app_id=${RES_ID}&app_key=${RES_KEY}`
  return (
    <div className="App">
      <h1>Food App</h1>
      <form  className="search">
        <input type="text"/>
        <button className="search-button" type="submit">Search</button>
        <select name="food" id="select">
          <option value="#">#</option>
          <option value="#">#</option>
          <option value="#">#</option>
          <option value="#">#</option>
          <option value="#">#</option>
        </select>
      </form>
    </div>
  )
}

export default recipe;