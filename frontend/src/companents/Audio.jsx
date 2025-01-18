import React from 'react'

function Audio() {
    return (
        <div className='Audio'>
            <audio controls>
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Audio
