import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function RatingSelect({select, selected}) {
  // Dont need local state due to being a duplicate of parent state
  // also no real need for useEffect or context
  
  // const [select, setSelected] = useState(10)

  // const {feedbackEdit} = useContext(FeedbackContext)

  // useEffect(() => {
  //   setSelected(feedbackEdit.item.rating)
  // }, [feedbackEdit])

  const handleChange = (e) => {
      select(+e.currentTarget.value)
  }

    

  return (
    <>
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </>
  )
}

export default RatingSelect
