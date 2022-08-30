// import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [ feedback, setFeedback ] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const res = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await res.json()

        setFeedback(data)
        setIsLoading(false)
    }

    // Add feedback
    const addFeedback = async (newFeedback) => {
        const res = await fetch ('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await res.json()

        // Dont need UUID due to json making unique ID for each POST 
        // newFeedback.id = uuidv4()
        setFeedback([data, ...feedback])
    }

    // Delete feedabck
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure?')) {
            await fetch (`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update Feedback Item
    const updateFeedback = async (id, updItem) => {
        const res = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body: JSON.stringify(updItem),
        })

        const data = await res.json()

        setFeedback(feedback.map((item) => (
            item.id === id ? data : item
        )))

        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }


    return <FeedbackContext.Provider 
        value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext