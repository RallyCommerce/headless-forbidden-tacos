

const Section = ({ id, children }) => {
  return (
    <div id={id} className="my-5 md:my-10 py-5 md:py-10 max-w-7xl w-full mx-auto px-3 relative">
      {children}
    </div>
  );
};

export default Section;