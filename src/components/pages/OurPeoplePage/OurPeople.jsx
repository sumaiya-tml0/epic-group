import React from 'react'
import ContentCard from '../../shared/ContentCard'

import img1 from '../../../assets/ourPeoplePage/Personal-Empowerment.jpg'
import img2 from '../../../assets/ourPeoplePage/Zero-Tolerance-To-Non-Compliance.jpg'
import img3 from '../../../assets/ourPeoplePage/Beyond-Governance.jpg'

export default function OurPeople() {
  return (
     <>
        <div className='absolute top-2/4  z-20 w-full text-center flex justify-center items-center'>
            <h1 className='text-8xl font-bold capitalize text-white'>our people</h1>
        </div>

        <div className='text-center lg:w-[62%] lg:mx-auto mt-32'>
            <h1 className='text-[32px] mb-4 font-bold text-black text-center uppercase'>the lifeline of epic is our people</h1>
            <div className='h-[29px]'></div>
            <p className=" leading-relaxed text-[17px]">Based out of factories in Asia and Africa, or offices in Europe and USA our people work tirelessly to artfully create the beautiful apparel that we supply to our renowned customers every day. With nearly 25,000 people, their diversity, strength and passion for excellence puts EPIC in the forefront of cutting edge innovation in every function of the organization.</p>
        </div>

        <div className='mt-20 mb-10 lg:mb-0'>
          <ContentCard
            imageSrc={img1}
            title="Personal Empowerment"
          >
            People perform better when they feel empowered, so we help our people grow through technical & leadership up-skilling programmes, financial autonomy (mobile banking), and carefully guided career progression.<br /><br />
            Our Workers’ Council offers a solid infrastructure for everyone to voice their opinion within the organization.
          </ContentCard>
    
          <ContentCard
            imageSrc={img2}
            title="Zero Tolerance To Non-Compliance"
            reverse
          >
            This means the safety and security of our employees comes first in all areas of our work.<br /><br />
           We use a custom-designed people management ERP solution to help the organization develop informed management strategies and SAP success factors to direct talent analytics.
           
          </ContentCard>
    
          <ContentCard
            imageSrc={img3}
            title="Beyond Governance"
          >
            This is our culture of ownership, passion for excellence and continually striving to be better that is the driving force behind EPIC Group.
          </ContentCard>
        </div>
        </>
  )
}
