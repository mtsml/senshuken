import React from 'react'

const Spinner = () => {
    return (
        <div className='text-center'>
            <div className="spinner-border" role="status" style={{color: '#3F729B', width: '4rem', height: '4rem'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner