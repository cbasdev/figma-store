import Button from '../Button'

const Header = () => {
  return (
    <header className='bg-figma-yellow'>
      <div className='flex justify-between py-5 px-20'>
        <div className=' flex gap-2'>
          <Button text='Shop' />
          <Button text='About' />
        </div>
        <div className='flex gap-2 items-center'>
          <h1 className='text-2xl'>THE FIGMA STORE</h1>
          <Button text='UNITED STATES' />
          <Button text='CART 0' />
        </div>
      </div>
    </header>
  )
}

export default Header
