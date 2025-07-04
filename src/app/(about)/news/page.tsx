import HeroSection from '@/components/HeroSection'
import LatestNews from '@/components/LatestNews'
import React from 'react'

function Page() {
  return (
    <>
    <HeroSection title='News' />
    <div className='p-20 text-2xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis laboriosam quas ratione placeat iste doloremque error earum deleniti consequuntur beatae? Minima enim officiis fuga pariatur, est cupiditate voluptate aut alias.
    </div>
    <div className='px-20 py-10'>
    <LatestNews />
    </div>
    </>
  )
}

export default Page