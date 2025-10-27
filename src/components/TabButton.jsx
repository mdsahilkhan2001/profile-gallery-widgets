const TabButton = ({ active, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition ${
        active
          ? "bg-white text-black shadow-md"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
