export default function Places({ title, fallbacktext, places, onSelect }) {
  return (
    <div className="border-2 border-cyan-950 ">
      <h2 className=" text-blue-300 font-bold p-2">{title}</h2>
      {places.length === 0 && <p className="p-2">{fallbacktext}</p>}
      {places.length > 0 &&
        places.map((place) => (
          <button
            className="h-64 w-64 relative m-4"
            onClick={() => onSelect(place.id)}
          >
            <img
              className=" object-cover h-64 w-64 border-transparent rounded-xl"
              src={place.image.src}
              alt={place.image.alt}
            ></img>
            <p className=" bg-yellow-200 text-black absolute bottom-0 right-4 shadow-black mb-2">
              {place.title}
            </p>
          </button>
        ))}
    </div>
  );
}
