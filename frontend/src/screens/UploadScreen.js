import React from 'react'

const UploadScreen = () => {
    return (
        <div>
            <form>
                <input placceholder='Username' value='username' type='text' />
                <input placceholder='Choose Image' type='file' />
                <input placeholder='This is a memory of...' value='description' type='text' />
            </form>
        </div>
    )
}

export default UploadScreen
