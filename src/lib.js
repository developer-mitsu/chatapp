import { useState } from 'react'

const useInput = (type, id) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        type: type,
        value: value,
        onChange: onChange,
        id: id
    }
}

export { useInput }