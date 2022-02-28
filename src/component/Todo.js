import React, { useState } from 'react'
import download from "../image/download.jpeg"

function Todo() {
  const [inputeData, setInputeData] = useState('')
  const [item, setItems] = useState([])
  const addItem = () => {
    inputeData ?
      setItems([...item, inputeData]) : alert("plese enter data")
    setInputeData('')
  }
   const deleteItem=(ind)=>{
    const updatedItems=item.filter((item,id)=>{
       return ind!==id
     })
     setItems(updatedItems)
   }
   const removeAll=()=>
   {
     setItems([])
   }
  return (
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <img src={download} alt="list" />
          <figcaption>Add Youre List Here </figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder='add item...' value={inputeData} onChange={(e) => setInputeData(e.target.value)} />
          <i className="fa fa-plus add-btn" title='Add itom' onClick={addItem} />
        </div>
        <div className="showItems">
          {
            item.map((ele,ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{ele}</h3>
                  <i className="far fa-trash-alt add-btn" title='Delete itom' onClick={()=>deleteItem(ind)} />
                </div>
              )
            })
          }
        </div>
        <div className="showItems">
          <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
        </div>
      </div>
    </div>
  )
}

export default Todo