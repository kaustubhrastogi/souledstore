import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { addWish, removeWishListItem } from '../../redux/wishList-reducer'

export const HeartComp = ({mockSample,index}) => {
    const [heartColor, setHeartColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
        <Icon 
            name="heart" 
            circular
            color={heartColor}
            style={{color:heartColor,}}
            size="large"
            onClick={()=>{
              if(heartColor=="white"){
                setHeartColor("red")
                dispatch(addWish(mockSample[index]))
              }else if(heartColor=="red"){
                setHeartColor("white")
                dispatch(removeWishListItem(index))
              }
              }}
             /> 
    </div>
  )
}
