const ExpCard = ({time, year, place, extra}) => {
  return (
    <li className="flex items-center gap-2">
      <div className="min-w-[95px] h-full flex flex-col justify-center items-center italic bg-blue-400 text-white p-1.5 px-4 rounded">
        <span className="font-semibold text-sm">{time}</span>
        <span className="text-[10px]">({year})</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{place}</span>
        <p className="text-xs text-gray-600">{extra}</p>
      </div>
    </li>
  );
};

export default ExpCard
