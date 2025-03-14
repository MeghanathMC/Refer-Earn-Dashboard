function Info(props: {title: string , value: string, type: string}) {
  const getStyles = () => {
    switch(props.type) {
      case 'green':
        return {
          bg: 'bg-gradient-to-l from-green-200 to-green-50',
          text: 'text-green-700'
        };
      case 'red':
        return {
          bg: 'bg-gradient-to-l from-red-200 to-red-50',
          text: 'text-red-700'
        };
      case 'yellow':
        return {
          bg: 'bg-gradient-to-l from-yellow-200 to-yellow-50',
          text: 'text-yellow-700'
        };
      default:
        return {
          bg: 'bg-gradient-to-l from-blue-200 to-blue-50',
          text: 'text-blue-700'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`flex flex-col justify-center h-[100px] ${styles.bg} px-5 py-3 rounded-xl`}>
      <span className="text-sm font-bold text-gray-600">{props.title}</span>
      <span className={`text-xl font-bold mt-1 ${styles.text}`}>{props.value}</span>
    </div>
  )
}

export default Info