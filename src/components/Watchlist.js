import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";




const Watchlist = ({id}) => {
  const [isWatchList, setWatchList] = useState(false)

  useEffect(() => {
    const storedWatchList = localStorage.getItem('watchlist');

    if(storedWatchList){
      const watchlist = JSON.parse(storedWatchList)
      setWatchList(watchlist.includes(id))
    }
  }, [id])

  const toggleWatchList = () => {
    const storedWatchList = localStorage.getItem('watchlist')
    let watchlist = storedWatchList ? JSON.parse(storedWatchList) : []

    if (isWatchList){
      watchlist = watchlist.filter((id) => id !== id)
    } else {
      watchlist.push(id)
    }

    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    setWatchList(!isWatchList)
  }

  return (
    <button className={`bg-gray-200 px-4 py-2 rounded-full ${
      isWatchList? 'text-teal-400' : 'text-gray-600'
    }`}
    onClick={toggleWatchList}>
      <FontAwesomeIcon icon={faBookmark} />
    </button>
  )
}

export default Watchlist