import React from 'react'
import { useSelector } from 'react-redux'
import SubCategoryCard from './SubCategoryProducts/SubCategoryCard'

export const WishListComp = () => {
    const {wishListItem} = useSelector((state)=>state.wishList.data)
    console.log('wishListItem',wishListItem)
  return (
    <div className="subcategory-main">
          {wishListItem.map((i, index) => (
            <SubCategoryCard
              index={index}
              id={i.id}
              img={i.img}
              name={i.name}
              category={i.category}
              price={i.price}
              offPrice={i.offPrice}
            />
          ))}
        </div>
  )
}
