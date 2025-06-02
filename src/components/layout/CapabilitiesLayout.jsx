import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CapabilitiesTabSection from "../shared/CapabilitiesTabSection";

import Img1 from "../../assets/aboutPage/design1.jpg";
import Img2 from "../../assets/aboutPage/Prototyping_Browzwear.jpg";
import Img3 from "../../assets/aboutPage/co-creation.jpg";
import Img4 from "../../assets/aboutPage/supply-chain1.jpg";
import Img5 from "../../assets/aboutPage/hero_1.jpg";
import Img6 from "../../assets/aboutPage/forest.jpg";
import Img7 from "../../assets/aboutPage/byong1.jpg";
import Img8 from "../../assets/aboutPage/technology-2.jpg";

import epicStudio from "../../assets/aboutPage/epic_studio.jpg";
import earthYoga from "../../assets/aboutPage/earth-yoga.jpg";
import brandImg1 from "../../assets/aboutPage/brand1.jpg";
import brandImg2 from "../../assets/aboutPage/brand2.jpg";

export default function CapabilitiesLayout() {
  const designDevelopment = {
    introTitle: "We Welcome Unusual Manufacturing Requirements",
    introText:
      "One of EPIC’s key strengths is our willingness and our operational versatility to meet each customer’s unique manufacturing requirements. No matter what your brand’s needs are, we will do everything in our power to deliver this for you.\n\nTo support this we provide Design & Development Studios in New York, Hong Kong and soon to be, London.",
    items: [
      {
        title: "Design & Innovation",
        description:
          "With design studios in NY & HK and an expanding UK division we can offer in-depth market knowledge and trend intelligence to our customers globally. Our design teams produce ongoing collections throughout the year with over 100 new fabrics to choose from, with a huge focus on sustainability.",
        image: Img1,
      },
      {
        title: "Product Development",
        description:
          "Our teams work closely with each brand to ensure that the products we develop are right for their consumers. Taking into account fashionability, sustainability, new techniques & value-added technologies that will set them apart from the competition.\n\nThe integration of our 3D sampling improves speed, accuracy & flexibility at the development stage.",
        image: Img2,
      },
      {
        title: "Co-Creation",
        description:
          "Whether you want us to manufacture to your precise specifications or work more collaboratively to co-develop products, our teams are ready to bring your collection to life.",
        image: Img3,
      },
    ],
  };

  const supplyChain = {
    introTitle: "Over 50 Years of Smart Sourcing",
    introText:
      "Besides having world-class manufacturing facilities for several years, Epic is exclusively tied up with world-class factories in Bangladesh and Ethiopia where they provide diversified options to our customers of duty-free and a product range that include wovens, knits, outerwear, loungewear, athleisure, uniforms, and safety gear.\n\nWith decades of experience, Epic Group has a team of over 200 people on the ground monitoring every aspect of production to be able to provide the highest levels of quality and service to our customers through our sourcing abilities.",
    items: [
      {
        title: "Fabric Development",
        description:
          "We have decades of technical fabric knowledge, along with skilled in-house buyers who have cultivated relationships with over 100 fabric suppliers.\n\nEvery quarter we explore and develop at least 50 tailor-made fabrics that combine comfort and performance with sustainability.",
        image: Img4,
      },
      {
        title: "Partnership Mills",
        description:
          "We have Preferred Supplier programs in place with strategic mills across China, India, Pakistan and Bangladesh, with relationships that reach back over two decades.",
        image: Img2,
      },
      {
        title: "Safety & Liberty Protocols",
        description:
          "Right from the start, all our raw material suppliers are required to comply with our code of conduct, and to maintain manufacturing and traceability records for every production batch, starting from cotton fibre production.\n\nWe also require an Oekotex certificate from all our raw material suppliers and the use of hazardous chemicals is strictly prohibited.",
        image: Img3,
      },
      {
        title: "Sustainable Threads",
        description:
          "We are relentlessly shifting towards sustainable fabrics. Since 2019, majority of our cotton is BCI. We are increasing our use of organic cotton year on year.\n\nAlso in 2020 we used recycled polyester in 5 million garments.",
        image: Img2,
      },
      {
        title: "Speed to Market",
        description:
          "Working collaboratively with customer planners through capacity planning, grieve booking, leveraging products against multiple yarns and departments with a 7 to 14 days production process time, enables us to create a speed to market that is essential for the new era of digitised shopping.\n\nIn addition to this, EPIC is building two micro-factories. These ‘factories of the future’ provide agile production facilities with shorter production lines, multi-skilled operators, and advanced technology in terms of equipment and digitalisation.",
        image: Img3,
      },
      {
        title: "Fabric Library",
        description:
          "Our fabric library has archived our fabrics developed over the last 10 years, while continuously replenishing them with newly developed ones. This enables us to provide multiple choices for our customers with rapid response.",
        image: Img2,
      },
      {
        title: "Fabric Quality Testing & Inspection",
        description:
          "All our fabrics come with both internal and external test reports from accredited labs, where critical mechanical and colour parameters are assessed.\n\nAll our factories have state-of-the-art, in-house labs that are accredited by major brands, enabling us to test at very high frequency.",
        image: Img3,
      },
    ],
  };

  const manufacturing = {
    introTitle: "Better Manufacturing",
    introText:
      "Epic is an ethically driven manufacturer of men’s, women’s, and children’s clothing. We are leaders in sustainability in both manufacturing and fabric sourcing, constantly striving to improve practices across the textile industry. We also pride ourselves on excellent relationships with our customers, offering versatility, flexibility, and a strong product.",
    items: [
      {
        title: "Factories of the Future",
        description:
          "Smaller, leaner, and more agile manufacturing facilities; able to respond to rapidly changing customers’ demands.",
        image: Img5,
      },
      {
        title: "Environmentally Conscious",
        description:
          "Sustainable and environmentally conscious processes that protect the Earth’s resources. Our manufacturing utilizes less water, fewer chemicals, and less energy through solar panelled rooftops, ozone washing machines, foam dying techniques, and recycled fabrics.",
        image: Img6,
      },
      {
        title: "People Centric",
        description:
          "Caring for our number one asset – our people. This is always at the front of all EPIC decision-making. Female empowerment, and a better trained, multi-skilled workforce are some of the salient examples of our vision.",
        image: Img3,
      },
      {
        title: "Digitization",
        description:
          "Keeping up with Industry 4.0 trends, our operations are supported by the latest digital innovations. Productivity improves through real-time data collection and automation, which enables us to pursue our quest for continuous improvement.",
        image: Img2,
      },
      {
        title: "Zero–Defect Environment",
        description:
          "Creating and sustaining a zero-defect environment through the diligent application of technology enables quality products and employee practices.",
        image: Img3,
      },
    ],
  };

  const beyondManufacturing = {
    introTitle: "Beyond Manufacturing",
    introText:
      "We are dedicated to being a pioneer in our industry, unlocking contemporary opportunities for EPIC Group around its eco systems, including advancing our Group’s functions into Angel investing, Product category expansion, Online development, Sustainable technology and beyond.",
    items: [
      {
        title: "Sourcing Model of the Future",
        description:
          "We are your supplier of the future. An agile and nimble supply chain partner offering product diversification, flexibility, and speed to market using different geographies.\n\nWe have exclusive agreements with world-class manufacturing facilities in Egypt, Pakistan, Vietnam and Jordan.",
        image: Img7,
      },
      {
        title: "Our Brands",
        description:
          "To add further value and opportunity for our clients, we have acquired and developed a number of specific retail brands. These are purposed for ranging in our customers retail collections, or for other collaborations. They are available to selected partners on special terms.",
        image: Img2,
      },
    ],
  };

  const technology = {
    introTitle: "Technology is Key",
    introText: "to constantly improving & innovating our operations.",
    items: [
      {
        title: "Tailor made EPICOMS interfaced with SAP",
        description:
          "The SAP system allows us to do end-to-end order management, right from the product development stage to the delivery and receipt of payment.\n\ninto the Group’s internal systems. This application module tracks and monitors daily production data at each stage of the production activity. Today, we can monitor the production process from anywhere around the world.",
        image: Img8,
      },
      {
        title: "Digital Fabric Library",
        description:
          "Best in class digital technology to enable DIGITAL SAMPLING & APPROVAL. This near life-like digital innovation also enables us to reduce the carbon footprint of rounds of physical samples that are traditionally shipped globally.\n\nBy making sampling more digital, we can speed up approval times and do our bit for the environment.",
        image: Img2,
      },
      {
        title: "3D Design Capabilities",
        description:
          "To turn your fashion concepts into a physical reality, we use V-stitcher and Lotta to provide digital designs on-site, plus designers on hand who can work with you in real-time to make any pattern changes on the spot!",
        image: Img3,
      },
      {
        title: "Smart Warehousing",
        description:
          "EPIC has created SMART warehouses that are able to handle GOH (Garments-On-Hangars), carton packed finished goods, and Pick-n-Pack operations. The warehouses are connected wirelessly and have mobile devices with SMART ROUTING & PICKING capabilities. We continue to push innovation in the SUPPLY CHAIN.",
        image: Img2,
      },
    ],
  };

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

      <div className="px-4 max-w-[1250px] mx-auto relative">
        <Tabs>
          <TabList className="flex flex-col md:gap-1 sm:flex-row sm:flex-wrap lg:justify-between lg:bg-[#ebf0f3] lg:rounded-full  text-[#1a3b91] px-2 lg:py-1.5 text-sm mb-12 capitalize cursor-pointer">
            <Tab>Design & development</Tab>
            <Tab>supply chain</Tab>
            <Tab>manufacturing</Tab>
            <Tab>beyond manufacturing</Tab>
            <Tab>technology</Tab>
          </TabList>

          <TabPanel>
            <CapabilitiesTabSection {...designDevelopment} />
          </TabPanel>
          <TabPanel>
            <CapabilitiesTabSection {...supplyChain} />
          </TabPanel>
          <TabPanel>
            <CapabilitiesTabSection {...manufacturing} />
          </TabPanel>
          <TabPanel>
            <CapabilitiesTabSection {...beyondManufacturing} />
            <div className="pb-[60px] text-black">
              <h2 className="text-3xl font-bold mb-4 text-center">
                EXCLUSIVE BRAND PORTFOLIO
              </h2>
              <div className="h-7"></div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                <img
                  src={epicStudio}
                  alt="EPIC Studio"
                  className="w-[283px] h-[156px]"
                />
                <img
                  src={earthYoga}
                  alt="Earth Yoga"
                  className="w-[283px] h-[156px]"
                />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center">
                BRAND VIDEOS
              </h2>
              <div className="h-7"></div>
              <div className="flex gap-6 justify-between mb-8">
                <img
                  src={brandImg1}
                  alt="Brand 1"
                  className="w-full max-w-sm"
                />
                <img
                  src={brandImg2}
                  alt="Earth Yoga"
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <CapabilitiesTabSection {...technology} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
