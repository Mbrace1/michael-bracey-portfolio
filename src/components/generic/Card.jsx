const Card = ({ children, className = '' }) => {

  return (
    <div className={`w-full bg-amber-50 dark:text-white dark:bg-gray-800 rounded-xl shadow-md
    transition-shadow duration-300 hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;