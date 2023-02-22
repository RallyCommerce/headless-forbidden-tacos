'use client'

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


const Button = ({id, cta, classes}) => {
  return (
    <button
      onClick={() => scrollTo(id)}
      type="button"
      className={`${classes}`}>
      {cta}
    </button>
  );
}

export default Button;