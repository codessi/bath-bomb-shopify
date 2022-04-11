import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { ShopContext } from '../context/shopContext'


const ProductPages = () => {

  const {slug} = useParams()

  const { fetchProductWithHandle, addItemtoCheckout, product} = useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(slug)
  }, [fetchProductWithHandle, slug])


  if(!product.title) return <div>Loading....</div>
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )

}

export default ProductPages