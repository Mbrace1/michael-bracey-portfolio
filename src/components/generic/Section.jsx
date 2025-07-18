const Section = ({ id, title, children, styling = "" }) => {
let style = "py-16 px-4 max-w-5xl mx-auto"
if (styling != "") {
    style += " " + styling
}

  return (
    <section id={id} className={style}>
      {title && (
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-2">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;