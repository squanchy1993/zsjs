import React from 'react'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > { }

export const MyButton = ({ className, ...props }: Props) => {
  return (
    <p>fasdfasd</p>
  )
}

