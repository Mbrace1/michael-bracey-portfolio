const Button = ({ children, onClick, href, variant = 'primary', className = '', ...props }) => {
  const base = `px-4 py-2 rounded transition font-semibold text-sm cursor-pointer`;

  const variants = {
    primary: `bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `bg-gray-100 text-gray-800 hover:bg-gray-200`,
    outline: `border border-gray-400`,
    flat: ""
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={"button"} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
