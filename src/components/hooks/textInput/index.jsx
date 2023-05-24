

import { useState } from 'react'

const useTextInput = () => {
    const [text, setText] = useState('')


    const textHandler = (newText) => {
        setText(newText)
    }

    cleanText = () => {
        setText('')
    }
    return {
        text,
        textHandler,
        cleanText
    }
}

export default useTextInput