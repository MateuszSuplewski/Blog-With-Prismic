import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Informer from '../components/Informer'

const Page404 = () => {
  const navigate = useNavigate()
  const [time, setTime] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((actualTime) => actualTime - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (time === 0) navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <Informer>
      <p>{'Ooops! Something went wrong :/ .... Looks like page your are looking for doesn\t exist!'}</p>
      <p>{`You will be automatically redirected to home page in ${time} s`}</p>
    </Informer>
  )
}

export default Page404
