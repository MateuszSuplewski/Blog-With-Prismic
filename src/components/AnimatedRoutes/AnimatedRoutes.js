import React from 'react'
import PageRoutes from '../PageRoutes'
import { useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { StyledAnimatedRoutes } from './AnimatedRoutes.styled'

const AnimatedRoutes = () => {
  const location = useLocation()
  const animationTime = 1000
  return (
    <TransitionGroup>
      <CSSTransition
        classNames={'page-animation'}
        timeout={animationTime}
        key={location.key}
      >
        <StyledAnimatedRoutes time={animationTime}>
          <PageRoutes location={location}/>
        </StyledAnimatedRoutes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimatedRoutes
