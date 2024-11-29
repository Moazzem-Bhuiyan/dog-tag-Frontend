import DialogLogin from "@/app/(auth)/Login/page";
import Link from "next/link";

const Navber = () => {
  const Navlink = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Gifts",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
    {
      title: "Login",
      link: "#",
    },
  ];

  return (
    <div className="flex justify-center gap-44 w-full">
      {Navlink.map((item, index) => (
        <div key={index}>
          {item.title === "Login" ? (
            <Link href="/Login">
              <DialogLogin>
                <h1 className="cursor-pointer">{item.title}</h1>
              </DialogLogin>
            </Link>
          ) : (
            <Link href={item.link}>
              <h1>{item.title}</h1>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navber;
