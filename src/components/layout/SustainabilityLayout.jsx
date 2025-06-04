import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import CapabilitiesTabSection from '../shared/CapabilitiesTabSection';

import Img1 from "../../assets/sustainabilityPage/inv2.jpg"
import Img2 from "../../assets/sustainabilityPage/environmental-img2.jpg"
import Img3 from "../../assets/sustainabilityPage/inv-1.jpg"
import Img4 from "../../assets/sustainabilityPage/environmental-img4.jpg"
import Img5 from "../../assets/sustainabilityPage/laundry.png"

import Img6 from "../../assets/sustainabilityPage/almaz.jpg"
import Img7 from "../../assets/sustainabilityPage/Epic-University-5.jpg"
import Img8 from "../../assets/sustainabilityPage/Life@Epic-issue1_uni.jpg"
import Img9 from "../../assets/sustainabilityPage/EPIC-CASH-QUEUE.jpg"
import Img10 from "../../assets/sustainabilityPage/social1.jpg"
import Img11 from "../../assets/sustainabilityPage/au-blog.jpg"
import Img12 from "../../assets/sustainabilityPage/pathway.jpg"

import Img13 from "../../assets/sustainabilityPage/Lady4-shutter.jpg"
import Img14 from "../../assets/sustainabilityPage/Epic-University-7.jpg"
import Img15 from "../../assets/sustainabilityPage/Epic-Nursery.jpg"

import reduced from "../../assets/sustainabilityPage/reduced.png"

export default function SustainabilityLayout() {
    const environmental = {
      introTitle: "BETTER FOR OUR PLANET",
      introText:
        "Epic’s overriding aim is to create healthy communities and prosperity for today’s and future generations. As such we are relentlessly committed to modifying our existing facilities and developing new ones in a sustainable manner to ensure we address economic, environmental, and social issues, and avoid the over consumption of key natural resources.",
      items: [
        {
          title: "Sustainable Fibers & Cotton",
          description:
            "Since 2019 most of the cotton sourced by Epic Group has met the Better Cotton Initiative, or equivalent, standards.\n\nWe continually work with our suppliers to reduce upstream environmental impact by using ever more sustainable raw material products such as sustainably sourced cellulose fiber and pre and post consumer recycled cotton.",
          image: Img1,
        },
        {
          title: "Recycled Polyester",
          description:
            "In 2019 we used 700 tons of recycled polyester in our garments that came from 17.5 Million recycled plastic bottles that otherwise would have ended in the oceans or landfills.\n\nOur commitment and efforts in sustainability have been recognized at Walmart’s 2020 Global Sourcing Sustainability Summit.",
          image: Img2,
        },
        {
          title: "Monitoring Raw Materials",
          description:
            "We carefully monitor the environmental performance of our upstream supply chain through Sustainable Apparel Coalition’s Higg Facility Environmental Module assessment, which works with suppliers to improve their environmental performance.",
          image: Img3,
        },
        {
          title: "Reducing Our Emissions",
          description:
            "In Bangladesh, we have installed co-generation systems to reduce natural gas consumption and carbon emissions. Solar rooftops are planned for our Factories of the Future, along with other emission-reduction projects.",
          image: Img4,
        },
        {
          title: "Water Reduction",
          description:
            "To help us achieve ZDHC progressive/aspirational-level water discharge standards, we’ve entered into a strategic partnership with Arvind Envisol to boost our sustainable effluent treatment solutions.\n\nBased on advanced membrane technology, this will allow us to reuse 30-50% of the water, and reduce our water footprint across half our manufacturing units.",
          video: "https://www.youtube.com/embed/9KYJVYCZ8po?feature=oembed",
        },
        {
          title: "Low-Impact Laundry",
          description:
            "Yilmak Rainforest Jeanologia Ozone and Laser machines help us reduce water and chemical usage from bothour manufacturing and laundry processes.",
          image: Img5,
        },
        {
          title: "Low-Water Denim",
          description:
            "We are excited to be working with a customer to launch their first low-water denim program. This is a collaboration with Arvind Limited which produces an innovative denim fabric ‘Quantum Indigo’ using foam dye technology. The products are manufactured by EPIC with the use of laser, Ozone and Rainforest washing machines.",
          video: "https://www.youtube.com/embed/9KYJVYCZ8po?feature=oembed",
        },
      ],
    };
  
    const social = {
      introTitle: "BEYOND COMPLIANT",
      introText:
        "At Epic, we conduct our business with an uncompromising commitment to the social and environmental wellbeing of our fellows. We work to build and sustain a culture of health, safety and sustainability that goes beyond compliance.",
      items: [
        {
          title: "Women’s Empowerment",
          description:
            "One of our key drives is to empower women from all cultural backgrounds develop the confidence to go into leadership roles. We teach both the soft and technical skills needed and in collaboration with BRAC Bangladesh we run Supervisor and Associates programmes which this year alone is helping 540 women ascend the career ladder.\n\nWe also collaborate with brand partners such as Uniqlo, Levi’s and Betterwork. We target to have 100% female middle management over the next three years. Women are already an integral part of our senior leadership team.",
          image: Img6,
        },
        {
          title: "Gender Sensitisation",
          description:
            "EPIC has a zero tolerance policy for harassment of any kind. To create a safe working environment for our female employees we’ve partnered with BRAC Bangladesh to provide a company-wide “Safeguard” training for all our staff. We also have a dedicated Complaints Committee with an independent ombudsman to handle all sexual harassment issues.\n\nAlready in the pipeline is a third-party helpline so employees can feel safe to share any grievances anonymously.",
          image: Img7,
        },
        {
          title: "EPIC University",
          description:
            "Our own in-house development institute consists of 3 fully digitised classrooms accommodating up to 120 participants, plus a fully equipped physical fitness centre.\n\nWe conduct regular training sessions for: New Joiners Induction, Health & Safety, Anti-Sexual Harassment and Grievance Handling Training, plus a full Supervisor development programme run in collaboration with BRAC and CARE Bangladesh.\n\nSince 2018, over 5000 Associates and 800 Staff have been empowered by EPIC University.",
          image: Img8,
        },
        {
          title: "Wage digitization & Fin Tech",
          description:
            "In the ready-made garment industry, the transition from cash to digital payments has opened new doors for strengthening the digital ecosystem for garments associates. In this pursuit of building an inclusive digital ecosystem, Epic started paying salary through DBBL – Rocket (Mobile Financial service) for all our associates from 2020 to leverage banking and digital gateways. It is also augmented transparency and safety and financial inclusion.",
          image: Img9,
        },
        {
          title: "Scholarship Programmes",
          description:
            "Since 2012 we have been addressing our obligations of social responsibility. In our EGMCL factory we run a scholarship program that has covered schooling for two hundred fifty-nine children. In our PGCL factory, in collaboration with TESCO, we have covered schooling for twenty associates’ children.",
          image: Img10,
        },
        {
          title: "Asian University for Women (AUW)",
          description:
            "Our scholarship program with AUW, Pathways for Promise, aims to unlock the leadership potential of promising women currently working in garments factories. By providing them with university education & career development opportunities they can break the cycle of poverty.",
          image: Img11,
        },
        {
          title: "Pathways to a Promising Future",
          description:
            "By contributing to the decision-making in their fields, these educated women will then be able to improve the RMG industry from the inside, and dismantle prejudice against women and the working class. Through media coverage, role modelling and word of mouth, Pathways graduates will signal to the entire garments industry that a different, more sustainable and ethical path is possible.",
          image: Img12,
        },
      ],
    };
  
    const governance = {
      introTitle: "RESPONSIBLE MANUFACTURING",
      introText:
        "This is not a goal but a continuous journey into ever improving practises and products.",
      items: [
        {
          title: "Doing the Right Thing",
          description:
            "We believe in treating people with dignity and respect, not just obeying the laws of the land, but following the highest international ethical standards.\n\nIntegrity and transparency are integral values that propels EPIC’s culture of working to create safe and responsible business practices.",
          image: Img13,
        },
        {
          title: "Our Social Compliance Memberships",
          description:
            "In order to consistently maintain and calibrate our social compliance programmes, we are associated with the following national and international certification bodies: WRAP, SEDEX, ISO, Better Works, Nirapon, RSC, BUET, SAC, GOTS, OCS, OEKOTEX, & LEED.",
          image: Img14,
        },
        {
          title: "Elevate & Epic",
          description:
            "Together with ELEVATE, we are proudly building industry-leading social responsibility programmes.",
          image: Img15,
        },
      ],
    };
    console.log(environmental)
  /*
    https://www.youtube.com/embed/9KYJVYCZ8po?feature=oembed
    https://www.youtube.com/embed/9KYJVYCZ8po?feature=oembed
    */
  return (
   <div
         className="pt-12 pb-[60px] relative" style={{backgroundPosition:"-250px 0px"}}
         
       >
        <div className='absolute inline-block top-0 left-0 right-0 bottom-0 bg-auto bg-no-repeat'>

          <figure className='absolute inline-block top-0 left-0 right-0 bottom-0' style={{
           backgroundImage: `url('https://startuphub.liquid-themes.com/staging/wp-content/uploads/2020/04/bg-3.svg?id=776')`,
          backgroundPosition:"-250px 0px",
           backgroundRepeat: "no-repeat",
           backgroundSize: "auto",
         }}>

         </figure>

        </div>
   
         <div className="px-[15px] max-w-[1250px] mx-auto relative">
           <Tabs>
             <TabList className="flex flex-col md:gap-1 sm:flex-row sm:flex-wrap lg:justify-between lg:bg-[#ebf0f3] lg:rounded-full  text-[#1a3b91] px-2 lg:py-1.5 text-sm mb-12 capitalize cursor-pointer">
               <Tab>Environmental</Tab>
               <Tab>Social</Tab>
               <Tab>Governance</Tab>
             </TabList>
   
             <TabPanel>
               <CapabilitiesTabSection {...environmental} tabType="environmental" />
             </TabPanel>
             <TabPanel>
               <CapabilitiesTabSection {...social} tabType="social"/>
             </TabPanel>
             <TabPanel>
               <CapabilitiesTabSection {...governance} tabType="governance"/>
             </TabPanel>
           
           </Tabs>
         </div>
       </div>
  )
}

