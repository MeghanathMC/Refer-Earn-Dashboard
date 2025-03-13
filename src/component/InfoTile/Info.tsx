function Info(props: {title: string , value: string, type: string}) {
  return (
    <div className={`flex flex-col font-main ${props.type === 'green'? 'bg-gradient-to-l from-green-300 to-green-100' : props.type === 'red' ? 'bg-gradient-to-l from-red-300 to-red-100' : 'bg-gradient-to-l from-yellow-300 to-yellow-100'} px-10 py-8 rounded-b-4xl rounded-tr-4xl`}>
        <span className="text-sm tracking-wide">{props.title}</span>
        <span className="text-4xl">{props.value}</span>
    </div>
  )
}

export default Info