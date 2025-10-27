 export default function ImageCard({ src }) {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-[#1C1F25] shadow-lg cursor-pointer transition-transform hover:scale-105">
      <img
        src={src}
        alt="Gallery"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
