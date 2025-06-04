import React from 'react'
import CareerItem from '../pages/CareerPage/CareerItem'

import img1 from "../../assets/careerPage/Career-progression.jpg"
import img2 from "../../assets/careerPage/Training-and-Development.jpg"
import img3 from "../../assets/careerPage/Culture.jpg"

export default function CareerLayout() {
  return (
    <>
    <div className='absolute top-2/7  z-20 w-full text-center flex justify-center items-center'>
        <h1 className='text-[100px] font-bold capitalize text-white'>our careers</h1>
    </div>
    <div className='mb-10 lg:mb-0'>
      <CareerItem
        imageSrc={img1}
        title="Career progression"
      >
        Whether you are a specialist or a generalist, at Epic we’ll groom you to be an entrepreneur.<br /><br />
        From competency-based recruitment processes to carefully structured KPIs and performance evaluations, our management meticulously looks at talent pipelines using leading succession management tools to ensure our high potential talent is taken through curated career pathing, kept well engaged, and retained.<br /><br />
        We are as good at our talent, thereby we leave no stone unturned to nurture and grow the next generation of Epic leaders.
      </CareerItem>

      <CareerItem
        imageSrc={img2}
        title="Training and Development"
        reverse
      >
        Epic Group is growing by leaps and bounds towards establishing higher standards in setting up state-of-the-art global manufacturing facilities. Our employees must be curious, eager & ready to up-skill themselves to achieve this united dream that we all are passionate about. As such we continually invest in training for our people, and are pleased to announce our collaboration with Stafford and Chan Training who have specifically created the following online training courses for our global teams: The Leadership Program Series, Negotiation & Communication Program Series, Presentation Program Series.<br /><br />
        We have also invested in online learning tools for our employees. With over 100 training programs to choose from, as it provides easy access to all our teams no matter which geographic location.<br /><br />
       
      </CareerItem>

      <CareerItem
        imageSrc={img3}
        title="Culture"
      >
        Unique and central to Epic Group is its culture. We are a culture of empowering teams, a culture of nurturing freedom with responsibility, a culture of thinking and acting globally yet acting for the local environment and communities. We are a culture of entrepreneurship where every employee takes personal accountability for every task undertaken. We are a culture of integrity, fulfilling all our commitments decisively, ethically and authentically.<br /><br />
        Fortified by our values, we expect all our employees to embrace this culture and be its custodian. Learn more about our <a href="">values</a>.
      </CareerItem>
    </div>
    </>
  )
}
