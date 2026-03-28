function FragranceCard({ item }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-medium tracking-wide">
            {item.title}
          </h3>

          <span className="text-xl group-hover:translate-x-1 transition">
            →
          </span>

        </div>

        <p className="text-gray-600 mt-2 text-sm">
          {item.description}
        </p>

      </div>

    </div>
  );
}

export default FragranceCard;