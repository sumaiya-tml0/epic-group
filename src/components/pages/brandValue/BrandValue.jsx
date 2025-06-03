import React from "react";

export default function BrandValue() {
  return (
    <div>
      {" "}
      <div className="absolute top-2/4  z-20 w-full text-center flex flex-col justify-center items-center">
        <h1 className="text-6xl lg:text-8xl font-bold capitalize text-white mb-7">
          epic brand values
        </h1>
        <p className="text-lg lg:text-[21px] text-[#fffc]">
          Insights, updates, and stories from the world of Epic — stay informed <br />
          and inspired with our latest articles.
        </p>
      </div>

      <section className="lg:pt-20 pb-33 lg:pb-40">
       <div className="px-4 lg:w-4/5 mx-auto">
         <div className="lg:text-xl text-black leading-relaxed space-y-2.5">
            <p>Epic Group is anchored by a key set of values that we follow consistently as our guiding North Star, at all times. These apply equally internally and externally, for all our business, operations and engagements, and across all our stakeholders.</p>
        <p>These are the values that we live by and that we fundamentally believe in. They guide us consistently in every way. We hold ourselves accountable, measurable and responsible for living them in practice every day. We recognise that this is a never-ending and continuous process of improvement and that with effort, conviction and determination, we will consistently raise them by our spirit of a relentless pursuit to get ever-better.</p>
         </div>
        <ul className="text-[17px] list-disc mt-8  list-inside">
            <li>Epic is a highly-driven, ambitious and entrepreneurial company. Those who succeed best work in a spirit that embraces these ambitions and delivers them in practical and impactful ways,  whatever their roles or responsibility.</li>
            <li>We believe in a supportive balance between responsibility, risk and reward for everyone. We are convinced that this is the way to bring out the best in our people, and collectively in our company.</li>
            <li>Respect, sincerity, honestly, inclusiveness and open-mindedness are fundamental to culture at Epic.</li>
            <li>We believe that our primary competition is with ourselves. That is why we constantly seek to exceed our best achievements yesterday, to relentlessly raise our game further. In this way, tomorrow’s better will always beat yesterday’s best.</li>
            <li>We have an international outlook in everything we do. Our industry is global both in source and retail markets. Our employees are highly multinational and our offices span the world. We are not geocentric in any way, but rather grounded globally.</li>
            <li>We prize transparency in all our business dealings and transactions. It mirrors our commitment to accountability and responsibility. This applies at all times, internally & externally.</li>
            <li>Sustainability, responsible resource management and community are at the core of all of our operations and business practices</li>
        </ul>
       </div>
      </section>
    </div>
  );
}
