import AboutUs from "@/components/About/AboutUsPage";
export const metadata = {
  title: "About Us",
  description:
    "I’m Amar, a MERN Stack Developer passionate about building clean, scalable web apps and solving real-world coding challenges.",
};
const page = () => {
  return (
    <section>
      <AboutUs />
    </section>
  );
};

export default page;
