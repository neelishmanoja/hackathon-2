// components/Card.js
import Image from 'next/image'
import { Chef } from '../../../../typings'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export default async function Card() {
    const query = `*[_type == "chef"]{
  _id,
  name,
  position,
  experience,
  specialty,
  image {
    asset -> {
      _id,
      url
    }
  },
  description,
  available
}
`
    const chefs:Chef[] = await client.fetch(query)
  return (
    <div className="ml-4 mt-4  gap-4 sm:gap-6 grid grid-cols-2 md:grid-cols-3  ">
      {chefs.map((chef) => {
        return (
          <div key={chef._id} className="-ml-2">
            <div className="relative overflow-hidden hover:scale-110 duration-300 capitalize active:scale-90">
              <Image
                src={urlFor(chef.image).url()}
                alt="products"
                width={600}
                height={600}
                className="w-36 h-40 sm:w-48 md:w-60 md:h-56 lg:w-72 "
              />
            </div>
            <div className="mt-4">
            <div>
              <p className="text-xl font-bold">{chef.name}</p>
            </div>
            <div>
              <p className="text-[15px]  ">{chef.description}</p>
            </div>
            <div className='sm:flex sm:gap-7'>
                <p className="text-xl font-semibold text-orange-400  ">{chef.position}</p>
                <p className="text-xl font-semibold  ">{chef.experience}years of experience</p>
            </div>
            <div className='sm:flex sm:gap-7'>
                <p className="text-xl  ">Specialty:</p>
              <p className="text-xl font-medium text-[#FF9F0D]">{chef.specialty}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`mt-4 text-sm ${chef.available ? 'text-green-500' : 'text-red-500'}`}>
                {chef.available ? 'Currently Available' : 'Currently Unavailable'}
              </div>
            </div>
          </div>
          </div>
        )
      })}   
    
      </div>
    
  )
}

 
