import TextiCart from "./TextiCart";

const Testimonial = () => {
    const review = [
        {
          "name": "Charlotte Anderson",
          "position": "Satisfied Home Seller",
          "short_description": "Selling my home was a breeze with this agency. Their professionalism and expertise ensured a quick and profitable sale. Couldn't be happier with the outcome.",
          "image_link": "https://i.ibb.co/cQwMJnH/testimonial5-1.webp"
        },
        {
          "name": "Isabella Taylor",
          "position": "Real Estate Enthusiast",
          "short_description": "Impressed by this agency's attention to detail and dedication to client satisfaction. Whether buying, selling, or investing, I highly recommend giving them a call.",
          "image_link": "https://i.ibb.co/fGTxqXF/testimonial4-1.webp"
        },
        {
          "name": "Ava Wilson",
          "position": "First-time Home Buyer",
          "short_description": "Nervous about the process, but this agency made it incredibly easy. They helped me find a home that I absolutely love. Their guidance and support were invaluable.",
          "image_link": "https://i.ibb.co/6rC150z/testimonial1-1.webp"
        },
        {
          "name": "Charlotte Anderson",
          "position": "Satisfied Home Seller",
          "short_description": "Selling my home was a breeze with this agency. Their professionalism and expertise ensured a quick and profitable sale. Couldn't be happier with the outcome.",
          "image_link": "https://i.ibb.co/cQwMJnH/testimonial5-1.webp"
        },
        {
          "name": "Isabella Taylor",
          "position": "Real Estate Enthusiast",
          "short_description": "Impressed by this agency's attention to detail and dedication to client satisfaction. Whether buying, selling, or investing, I highly recommend giving them a call.",
          "image_link": "https://i.ibb.co/fGTxqXF/testimonial4-1.webp"
        },
        {
          "name": "Ava Wilson",
          "position": "First-time Home Buyer",
          "short_description": "Nervous about the process, but this agency made it incredibly easy. They helped me find a home that I absolutely love. Their guidance and support were invaluable.",
          "image_link": "https://i.ibb.co/6rC150z/testimonial1-1.webp"
        }
      ]
    return (
        <div className="mt-12 mb-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Testimonials</h1>
                <p>Publish the best of your client testimonials and let the world know what a great agent or real <br />
                estate agency you are. Testimonials build trust.
                 </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {
                    review.map((review,idx) => <TextiCart review={review} key={idx}></TextiCart>)
                }
            </div>
            
        </div>
    );
};

export default Testimonial;