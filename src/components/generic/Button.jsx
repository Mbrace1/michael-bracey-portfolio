const Button = ({ children, onClick, href, variant = 'primary', className = '', ...props }) => {
  const base = `transition font-semibold text-sm cursor-pointer`;

  const variants = {
    primary: `px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-900 dark:bg-blue-700 dark:text-white hover:dark:bg-blue-900 border-2`,
    secondary: `px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200`,
    outline: `px-4 py-2 rounded border border-gray-400`,
    icon: `p-2 rounded-full text-gray-600 hover:bg-amber-200/70 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`,
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
