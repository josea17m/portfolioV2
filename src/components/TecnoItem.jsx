/* eslint-disable react/prop-types */
const TecnoItem = ({ tecnologia }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="bg-teal-400/10 flex mr-1 text-teal-400 rounded-full  md:py-[5px] md:px-2 py-1 px-[10px] font-medium items-center">
        {tecnologia}
      </div>
    </li>
  );
};

export default TecnoItem;
