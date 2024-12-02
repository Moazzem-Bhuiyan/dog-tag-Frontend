import Link from "next/link";

const Navber = ({ onLoginClick }) => {
  const Navlink = [
    { title: "Home", link: "#" },
    { title: "Gifts", link: "#" },
    { title: "Services", link: "#" },
    { title: "Contact", link: "/ChangePassword" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-40 w-full p-4">
      {Navlink.map((item, index) => (
        <div key={index} className="mb-2 md:mb-0">
          <Link href={item.link}>
            <h1 className="">{item.title}</h1>
          </Link>
        </div>
      ))}

      <div className="mt-2 md:mt-0">
        <button onClick={onLoginClick} className="">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navber;
