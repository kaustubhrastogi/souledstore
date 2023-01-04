import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeWishListItem } from '../redux/wishList-reducer'
import SubCategoryCard from './SubCategoryProducts/SubCategoryCard'

export const WishListComp = () => {
  const dispatch = useDispatch()
    const {wishListItem} = useSelector((state)=>state.wishList.data)
    console.log('wishListItem',wishListItem)
  return (
    <div className="subcategory-main">
          {wishListItem && wishListItem.length>0 ? wishListItem.map((i, index) => (
            <div><SubCategoryCard
              index={index}
              id={i.id}
              img={i.img}
              name={i.name}
              category={i.category}
              price={i.price}
              offPrice={i.offPrice}
            />
            <button onClick={()=>dispatch(removeWishListItem(index))}>remove</button>
            </div>
          )):
          <h1>Wish List is Empty</h1>}
        </div>
  )
}