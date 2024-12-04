import Link from "next/link";

const Navber = ({ onLoginClick }) => {
  const Navlink = [
    { title: "Home", link: "/" },
    { title: "Gifts", link: "#" },
    { title: "Services", link: "#" },
    { title: "Contact", link: "/ChangePassword" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-40 w-full p-4">
      {Navlink.map((item, index) => (
        <div key={index} className="relative mb-2 md:mb-0 group">
          <Link href={item.link}>
            <h1 className="text-lg font-medium relative">
              {item.title}
              {/* Hover Border Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </Link>
        </div>
      ))}

      <div className="mt-2 md:mt-0 relative group ">
        <button
          onClick={onLoginClick}
          className="px-4  text-white text-lg rounded-md relative"
        >
          Login
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Navber;
