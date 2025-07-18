const Card = ({ children, className = '' }) => {

    let animation = "transition-transform duration-300 ease-in-out transform hover:scale-105 md:hover:scale-105 lg:hover:scale-110"

  return (
    <div className={`w-full bg-white rounded-xl shadow-md 
    ${className} ${animation}`}>
      {children}
    </div>
  );
};

export default Card;