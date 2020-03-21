import React from 'react'

export const moods = ((props) => {
    let data = props.data
    return (
        <>
            {data !==  undefined ? <div>
                <ul>
                    <li>Name: {data.Name}</li>
                    <li> Mood Description: {data.desc}</li>
                    <li>Date: {data.date}</li>
                    <li>Mood Type: {data.moodType}</li>
                </ul>
            </div> : null}
        </>
    )
})
