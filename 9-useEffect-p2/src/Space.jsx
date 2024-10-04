import React from 'react'

function Space() {
  const [mousePosition, setPosition] = React.useState({})

  React.useEffect(()=> {
    function trackMouse(e) {
      setPosition(e.clientX)
      console.log(e.clientX)
    }

    window.addEventListener('mousemove', trackMouse)

    return () => {
      window.removeEventListener('mousemove', trackMouse)
    }
  }, [mousePosition])

  return (
    <div style={{position: 'absolute', width: '100vw', height: '100vh', background:'hotpink'}}></div>
  )
}

export default Space