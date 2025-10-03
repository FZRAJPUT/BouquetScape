import React from 'react'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { TfiGift } from "react-icons/tfi";

const Features = () => {
    return (
        <div className='w-full pt-[60px] flex items-center justify-center pb-6'>

        <div className='border sm:justify-around max-w-[90%] items-center flex-wrap p-3 gap-12 sm:gap-0 border-gray-200 bg-gray-50 w-[80%] flex flex-col sm:flex-row'>
            <div className='flex items-center gap-4'>
                <LiaShoppingBagSolid className='text-[45px] sm:text-[50px]' />
                <div className='text-left'>
                    <p>Free shipping</p>
                    <p className='sm:text-sm text-[10px]'>On all orders over Rs 499.00</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <GiReceiveMoney className='text-[45px] sm:text-[50px]' />
                <div className='text-left'>
                    <p>15 days returns</p>
                    <p className='sm:text-sm text-[10px]'>Moneyback guarantee</p>
                </div>
            </div>
            <div className='flex items-center gap-4 '>
                <CiCreditCard1 className='text-[45px] sm:text-[50px]' />
                <div className='text-left'>
                    <p>Secure checkout</p>
                    <p className='sm:text-sm text-[10px]'>Protected by Paypal</p>
                </div>
            </div>
            <div className='flex items-center gap-4 '>
                <TfiGift className='text-[40px] sm:text-[45px]' />
                <div className='text-left'>
                    <p>Offer & gift here</p>
                    <p className='sm:text-sm text-[10px]'>On all orders over</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Features