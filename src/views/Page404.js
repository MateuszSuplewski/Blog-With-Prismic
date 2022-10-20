import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = (props) => {
  const defaultPath = '/pages/1'
  const navigate = useNavigate()
  const [time, setTime] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((Actualtime) => Actualtime - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (time === 0) navigate(defaultPath)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <div>
      <p>{'Ooops! Something went wrong :/ .... Looks like page your are looking for doesn\'t exist!'}</p>
      <p>{`You will be automatically redirected to home page in ${time} s`}</p>
    </div>
  )
}

export default Page404
