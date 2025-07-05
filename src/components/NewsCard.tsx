import Link from 'next/link'
import React from 'react'

function NewsCard({
    title, image
}:{
    title: string, image: string
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
     <div className='w-full h-[50vh]'  style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
    </figure>
    <div className="card-body">
      <Link href={"/article"}>
      <h2 className="card-title hover:underline cursor-pointer">
        {title}
      </h2>
      </Link>
    </div>
  </div>
  )
}

export default NewsCard