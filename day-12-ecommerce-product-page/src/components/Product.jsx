import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
const Product = () => {
  return (
    <div className='flex-1 flex justify-evenly items-center'>
        <ProductImage/>
        <ProductDescription/>
    </div>
  )
}

export default Product