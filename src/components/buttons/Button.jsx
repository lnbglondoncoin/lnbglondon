"use client";

const Button = ({ title = "Click me", onClick = () => {} }) => {
  return (
    <button
      className="w-full rounded-md bg-primary py-3 font-medium text-black px-5 sm:px-8"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
