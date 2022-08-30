// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


// No need for parameter and PropTypes of 'feedback' due to useContext from FeedbackContext.js...
function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)


    // Calculate Ratings Average
    let average = feedback.reduce((acc, { rating }) => {
        return acc + rating
    }, 0) / feedback.length

    // Limit decimal places
    average = average.toFixed(1).replace(/[.,]0$/, '')
  
    return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// Do not need prop types due to useContext from FeedbackContext.js...

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
