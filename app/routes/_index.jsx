import Header  from "./Header";
import Footer from "./Footer";

export const meta = () => {
  return [
    { title: "Mediahuis" },
    { name: "description", content: "Welkom bij mediahuis!" },
  ];
};

export default function Index() {
  return (
    <>
     <Header /> 
     <Footer />
    </>
  );
}