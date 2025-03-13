function Button(props: {text: string, action: string, setOpen: () => void }) {
  return (
    <button className="" onClick={props.setOpen}>{props.text}</button>
  )
}

export default Button