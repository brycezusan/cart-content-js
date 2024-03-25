import { useState } from "react"

function useToogle(){
  const [toogle, setToogle] = useState(false)

  const handleClickToogle = ()=>{
    setToogle(!toogle)
  }
  return{
    toogle,
    handleClickToogle
  }
}

export default useToogle