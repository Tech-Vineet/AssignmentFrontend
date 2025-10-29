import {cn} from '../libs/utils'
import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 md:py-4", className)}>{children}</div>
  )
}

export default Container