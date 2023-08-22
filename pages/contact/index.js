// components 
import Circles from '/components/Circles';

// icons 
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className=''>
          {/* text */}
          <h2 className='h2 text-center mb-12'>
            Let's <span className='text-accent'>Connect.</span>
          </h2>
          {/* form */}
          <form action="">form</form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
