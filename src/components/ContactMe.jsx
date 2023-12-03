import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <section className='cta'>
      <p className='cta-text  flex flex-wrap gap-11 '>
        Comment your thoughts <br className='mt-10 flex flex-wrap' />
        and feel free to communicate. Thank You
      </p>
      <Link to='/contact' className='btn'>
        This way
      </Link>
    </section>
  );
};

export default ContactMe;