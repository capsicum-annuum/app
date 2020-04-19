import React, { createContext, useState, useCallback, useContext } from 'react'
import { ApToaster } from 'app-components'

const ToasterProvider = ({ children }) => {
  const [toasters, setToasters] = useState([])

  const queue = useCallback(
    (content, options) => {
      const newToasters = [...toasters, { content, options }]

      setToasters(newToasters)
    },
    [toasters, setToasters],
  )

  const dequeue = useCallback(() => {
    const newToasters = toasters.slice(1)

    setToasters(newToasters)
  }, [toasters, setToasters])

  const toaster = toasters && toasters[0]

  return (
    <ToasterContext.Provider value={{ queue, dequeue }}>
      {toaster ? (
        <ApToaster
          content={toaster.content}
          options={toaster.options}
          dequeue={dequeue}
        />
      ) : null}
      {children}
    </ToasterContext.Provider>
  )
}

const ToasterContext = createContext(null)

const useToaster = () => {
  return useContext(ToasterContext)
}

const withToaster = (Component) => {
  return (props) => {
    const { queue } = useToaster()
    return <Component queue={queue} {...props} />
  }
}

export { ToasterProvider, withToaster, useToaster }
