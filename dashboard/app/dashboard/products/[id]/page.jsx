import Image from 'next/image'
import styles from '@/app/ui/dashboard/Products/singleProduct/singleProduct.module.css'

const SingleProductPage = () => {
  return (  
  <div className={styles.container}>
    <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
        <Image
          src='/noproduct.jpg'
          alt=''
          fill
        />
        </div>
        Iphone
    </div>
    <div className={styles.formContainer}>
      <form action='' className={styles.form}>
        <label>Title</label>
        <input type='text' name='Productname' placeholder='name' />

        <label>Price</label>
        <input type='number' name='Productname' placeholder='Example@gmai.com' />

        <label>Stock</label>
        <input type='number' name='stock' placeholder='23' />

        <label>color</label>
        <input type='text' name='color' placeholder='red' />

        <label>Size</label>
        <textarea type='text' name='size' placeholder='desc' />
        <label>Cat</label>
        <select name='cat' id='cat'>
        <option value="kitchen">Kitchen</option>
        <option value="computer">Computers</option>
        </select>
        <label>Is Active</label> 
        <select name='isActive' id='isActive'>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
    </div>
  </div>
  )
}
export default SingleProductPage