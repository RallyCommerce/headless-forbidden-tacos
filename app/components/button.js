'use client'

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


const Button = ({id, cta}) => {
  return (
    <button
      onClick={() => scrollTo(id)}
      type="button"
      className="bg-white border-2 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl">
      {cta}
    </button>
  );
}

export default Button;