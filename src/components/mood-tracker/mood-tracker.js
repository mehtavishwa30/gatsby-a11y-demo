import React, { useState } from 'react'

import './mood-tracker.css'
import { moods } from './moods'

function MoodTracker() {
    const [state, setState] = useState({})

    const submitFn = ((event) => {
      event.preventDefault()
      let target = event.target
      setState({data: {
        Name: target.Name.value,
        desc: target.desc.value,
        date: target.date.value,
        moodType: target.moodType.value
      }})
    })
    return (
      <>
        <p>Tell me how you feel today...</p>
        <div id="moodTracker">
          <form onSubmit={submitFn} name="moodForm">
            <div>
              <div className="label fit">
                <input type="text" placeholder="Enter your name" name="Name" required />
              </div>
              <div className="label fit">
                <input type="text" placeholder="How do you feel?" name="desc" required />
              </div>
            </div>
            <div>
              <div className="inputGroup left">
                <button type="button">
                  <i className="fa fa-caret-left"></i>
                </button>
                <div className="label">
                  <input type="text" placeholder="21.03.20" name="date" />
                </div>
                <button type="button">
                  <i className="fa fa-caret-right"></i>
                </button>
              </div>
              <div className="button-wrap right">
                <button type="button">
                  <i className="fa fa-calendar"></i>
                </button>
              </div>
              <div className="select right">
                <div className="label">
                  <select name="moodType" required>
                    <option>Select a mood type</option>
                    <option>Happy</option>
                    <option>Gloomy</option>
                    <option>Irritated</option>
                    <option>Sad</option>
                    <option>Anxious</option>
                    <option>Excited</option>
                    <option>Excited</option>
                    <option>Blah</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>
              <div className="button-wrap right">
                <button className="submit">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        <moods data={state.data} />
      </>
    )
}
export default MoodTracker;
