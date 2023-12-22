import React, { useState } from 'react'

const App = () => {
    // function
    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = ''
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        return result
    }

    // function
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const [randomString, setRandomString] = useState('****')
    const [randomNumber, setRandomNumber] = useState('****')

    // function
    const generateRandomValues = () => {
        setRandomString(generateRandomString(3))
        setRandomNumber(generateRandomNumber(10000, 99999))
    }

  return (
    <div className="flex items-center justify-center h-screen bg-cyan-950">
      <div className="max-w-md mx-auto p-4 bg-gray-300 rounded-lg shadow-lg text-center">
        <p className="text-2xl font-bold mb-4">{`SEQ${randomNumber}${randomString}`}</p>
        <button
          className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={generateRandomValues}
        >
          Create Reference
        </button>
      </div>
    </div>
  )
}

export default App
