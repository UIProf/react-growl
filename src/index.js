import React from 'react'

import './growl.css'

export const Growl = ({ active, message, onDismissed }) => {
  const [state, setState] = React.useState(true)

  React.useEffect(() => {
    setState(true)
  }, [active])

  const handleClick = () => {
    setState(false)
    onDismissed()
  }

  return (
    <div className={`_growl__growl__1A4mq${active && state ? ' _growl__active__1Ykby' : ''}`}>
      {message}
      <div onClick={handleClick} className="_growl__growl-close__1ZbKB"></div>
    </div>
  )
}

export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false)
  const onDismissed = () => {
    setGrowlActive(false);
  }
  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active);
      setTimeout(onDismissed, 3000);
    },
  ]
}
