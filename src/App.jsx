import React, { useState, useEffect } from 'react'

function App ({ second }) {
  const [curTime, setTime] = useState(new Date().toLocaleTimeString())
  const [countSecond, setCountSecond] = useState()
  const [isOn, setIsOn] = useState(true)

  useEffect(() => {
    var myInterval
    if (isOn) {
      myInterval = setInterval(function showTime () {
        var time = new Date().toLocaleTimeString()
        var s = new Date().getSeconds()
        setTime(time)
        setCountSecond(s)
      }, 1000)
    }
    return () => clearInterval(myInterval)
  }, [isOn])

  useEffect(() => {
    if (countSecond === (second + 10) % 60) {
      setIsOn(false)
    }
  }, [countSecond])

  return (
    <div className="container">
      <h1>{curTime}</h1>
      <button>Get Time</button>
    </div>
  )
}

export default App