import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: { },
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const feedback = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
        const data = await feedback.json()
        setFeedback(data)
        setIsLoading(false)
    }


    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure to want to delete? '))
        {
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (
            item.id === id ? {...item, ...updItem} : item)))
    }

    
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        isLoading,
        feedbackEdit,
        updateFeedback

    }}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext