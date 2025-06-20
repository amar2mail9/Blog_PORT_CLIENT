import Works from "@/components/Works/Works";

export const metadata = {
  title: "Works ",
  description:
    "A personal portfolio and blog where I showcase projects, share knowledge, and experiment with the latest tech.",
};
const page = () => {
  return (
    <section>
      <Works />
    </section>
  );
};

export default page;
