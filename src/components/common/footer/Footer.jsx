import Brand from "./Brand";
import ContactMethod from "./ContactMethod";
import FooterLinks from "./FooterLinks";
import WorkingTime from "./WorkingTime";

const Footer = () => {
  return (
    <div className="bg-[#292D32;] pb-10 border-t-[6px] border-t-[#FFAA00] ">
      <footer className="container flex  flex-col md:flex-row   mx-auto items-stretch	justify-between	 pt-8 max-w-[1170px] text-white mb-14">
        <ContactMethod />
        <FooterLinks />
        <WorkingTime />
      </footer>
      <Brand />
    </div>
  );
};

export default Footer;
