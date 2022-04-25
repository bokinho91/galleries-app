
function useFormatDate(str) 
    {
        const dateToFormat = new Date(str)
    
    const formatted = str ?  `${dateToFormat.toLocaleDateString()} ${dateToFormat.toLocaleTimeString()}` : ''
    

    return formatted
   }


export default useFormatDate 

