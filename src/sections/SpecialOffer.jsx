import Button from "../components/Button.jsx"
import { offer } from "../assets/images/index.js"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap
    items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <img src={offer} width={775} height={687}
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">

        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>

          <span className="text-coral-red">Special</span> Offer
      
          <br />
    
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. Form premier 
          selections to incredible savings, we offer unparalleled value that sets us apart.

        </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest expectations.
          Your Journey with us us nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4" >
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button label="Learn more" 
           backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
        </div>
  
      
        
      </div>

        
    </section>
  )
}

export default SpecialOffer