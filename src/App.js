import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

// No longer need useState, or Feedback data due to all being retrieved within Feedback Context...

// import { useState } from "react"
// import FeedbackData from "./data/FeedbackData"
// const [feedback, setFeedback] = useState(FeedbackData)

function App() {

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route 
                        exact path='/' 
                        element={
                            <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                            <AboutIconLink />
                            </>
                        }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                    
                </Routes>
                
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App