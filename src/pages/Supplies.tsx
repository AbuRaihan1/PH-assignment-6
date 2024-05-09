import SuplyCard from "../components/supplies/SuplyCard";

const Supplies = () => {
  const suupplyItem = [
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
    {
      image: "img",
      title: "title",
      category: "food",
      quantity: 12,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
      {suupplyItem?.map((item, idx) => (
        <div className="flex justify-center items-center" key={idx}>
          <SuplyCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Supplies;
