import React from 'react'

export default function Form (props) {
    return(
  <div>
    <form onChange={props.handleNewCity}>
      <input type='text' name='city' placeholder='City...' />
      <button>Get Weather</button>
    </form>
  </div>
    )
}