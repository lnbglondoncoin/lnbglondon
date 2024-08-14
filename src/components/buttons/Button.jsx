"use client";

const Button = ({ title = "Click me", onClick = () => {} }) => {
  return (
    <button
      className="w-full rounded-md bg-primary py-3 font-bold text-black px-8"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
