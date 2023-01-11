import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { addWish, removeWishListItem } from '../../redux/wishList-reducer'
import './SubCategory.css'
export const HeartComp = ({mockSample,index,id}) => {
    const [heartColor, setHeartColor] = useState("white")
    const {wishListItem} = useSelector((state)=>state.wishList.data)
    // console.log('wishListItem===>',wishListItem)
    // console.log('mockSample===>',mockSample)
    // console.log('index==>',index)
    const dispatch = useDispatch()
    useEffect(()=>{
      wishListItem.map((e)=>{
       if(mockSample.id===e.id){
        setHeartColor("red")
       }
      })
    },[])
  return (
    <div className='wishlist-icon'>
        <Icon 
            name="heart" 
            circular
            color={heartColor}
            style={{color:heartColor,}}
            size="large"
            onClick={()=>{
              if(heartColor=="white"){
                setHeartColor("red")
                dispatch(addWish(mockSample))
              }else if(heartColor=="red"){
                setHeartColor("white")
                dispatch(removeWishListItem(id))
              }
              }}
             /> 
    </div>
  )
}
