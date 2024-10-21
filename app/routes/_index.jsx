import Test from "./Test"; 
import Header  from "./Header";

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
    </>
  );
}