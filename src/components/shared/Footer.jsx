const Footer = () => {
  return (
    <div className=" bg-main w-full md:h-[266px] md:flex justify-around items-center p-4 ">
      <div className=" space-y-3 ">
        <h1 className=" md:text-center text-2xl">ADDRESS</h1>
        <li>unitedtags.x10.mx</li>
        <li>New York, USA</li>
        <li>Test 12345</li>
      </div>

      <div className=" space-y-3">
        <h1 className=" md:text-center text-2xl">CONTACT</h1>
        <li>Get in touch!</li>
        <li>+1-12345-678910</li>
        <li>abc@gmail.com</li>        
      </div>

      <div className=" space-y-3">
        <h1 className=" md:text-center text-2xl">QUICK LINKS</h1>
        <li>Shop now</li>
        <li>Legal Notice</li>
        <li>Privacy</li>
      </div>
    </div>
  );
};

export default Footer;
