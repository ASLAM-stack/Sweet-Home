import { FaStar } from "react-icons/fa6";

const TextiCart = ({ review }) => {
  const { name, position, short_description, image_link } = review;
  return (
    <div className="flex flex-col items-center p-4 space-y-2 border-2 rounded-lg shadow">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={image_link} />
        </div>
      </div>
      <div className="text-center">
        <p>{name}</p>
        <p>{position}</p>
        <p>{short_description}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <FaStar className="text-orange-300 text-xl" />
        <FaStar className="text-orange-300 text-xl" />
        <FaStar className="text-orange-300 text-xl" />
        <FaStar className="text-orange-300 text-xl" />
        <FaStar className="text-orange-300 text-xl" />
      </div>
    </div>
  );
};

export default TextiCart;
