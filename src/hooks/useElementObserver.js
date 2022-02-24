import React from 'react'
import { useState, useRef, useEffect, useMemo } from 'react'

const useElementObserver = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries => {

      const [entry] = entries;
      setIsVisible(entry.isIntersecting)
    }
  
    const optionsMemo = useMemo(() => {
      return options
      
    }, [options])
  
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, optionsMemo);
      const currentTarget = targetRef.current
      if(currentTarget) observer.observe(currentTarget);
  
      return () => {
        if(currentTarget) observer.unobserve(currentTarget)
      }
    }, [targetRef, optionsMemo])

    return isVisible
}

export default useElementObserver