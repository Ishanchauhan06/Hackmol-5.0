import React from 'react';
import CardInfo from "./Infocards"
const ProjectInfo = () => {
  return (
    <section className="bg-white-100 p-8">
        {/* Project Information */}
        
          {/* <h2 className="text-2xl font-bold mb-4 flex justify-center font-serif">Park With SPASHT</h2> */}
          <h2 className="text-2xl font-bold text-center font-serif">
          Navigate your parking experience with SPASHT-  </h2>
          <p className='mb-4 text-lg text-center mb-8'>because your parking experience should be as clear
           as the sky above</p> 
          <CardInfo/>        
    </section>
  );
};

export default ProjectInfo;

