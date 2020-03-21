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
              <label className="label fit">
                <span className="visuallyhidden">Enter your name</span>
                <input type="text" placeholder="Enter your name" name="Name" required />
              </label>
              <label className="label fit">
                <span className="visuallyhidden">How do you feel?</span>
                <input type="text" placeholder="How do you feel?" name="desc" required />
              </label>
            </div>
            <div>
              <div className="inputGroup left">
                <button type="button">
                  <span className="visuallyhidden">Select a previous date</span>
                  <i className="fa fa-caret-left"></i>
                </button>
                <label className="label">
                  <span className="visuallyhidden">Type the date of your mood entry</span>
                  <input type="text" placeholder="21.03.20" name="date" />
                </label>
                <button type="button">
                  <span className="visuallyhidden">Select a later date</span>
                  <i className="fa fa-caret-right"></i>
                </button>
              </div>
              <div className="button-wrap right">
                <button type="button">
                  <i className="fa fa-calendar"></i>
                </button>
              </div>
              <div className="select right">
                <label className="label">
                <span className="visuallyhidden">Select a mood type</span>
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
                </label>
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
