import { TbTruckDelivery } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
export default function Services() {
  return (
    <section className=''>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sp container'>
        <div className='flex flex-col items-start max-md:items-center max-md:text-center gap-2.5'>
          <span className=''>
            <TbTruckDelivery className='bg-btn_bg text-5xl  p-2  text-light rounded-full' />
          </span>
          <h4>Fast Delivery</h4>
          <p>
            Fast Delivery ensures rapid shipment and delivery of products, often
            within the same day or a few hours, using advanced logistics and
            strategic warehouse locations.
          </p>
        </div>
        <div className='flex flex-col items-start max-md:items-center max-md:text-center gap-2.5'>
          <span className=''>
            <FaLocationDot className='bg-btn_bg text-5xl  p-2  text-light rounded-full' />
          </span>
          <h4>Order Tracking</h4>
          <p>
            Order Tracking allows customers to monitor the status and location
            of their shipments in real-time, providing updates from dispatch to
            delivery.
          </p>
        </div>
        <div className='flex flex-col items-start max-md:items-center max-md:text-center gap-2.5'>
          <span className=''>
            <RiSecurePaymentFill className='bg-btn_bg text-5xl  p-2  text-light rounded-full' />
          </span>
          <h4>Secure Payment</h4>
          <p>
            Secure Payment ensures the safe and encrypted processing of
            financial transactions, protecting customers' sensitive information
            from fraud and theft.
          </p>
        </div>
        <div className='flex flex-col items-start max-md:items-center max-md:text-center gap-2.5'>
          <span className=''>
            <FaPercent className='bg-btn_bg text-5xl  p-2  text-light rounded-full' />
          </span>
          <h4>Big Discounts</h4>
          <p>
            Big Discounts offer substantial price reductions on products or
            services, providing significant savings to customers and often
            driving increased sales.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
