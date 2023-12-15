import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <img className="h-8 w-8 mb-4 " src={logoImg} alt="Quiz-logo"></img>
      <h1 className="font-bold tracking-widest mb-4">QUIZ APP</h1>
    </div>
  );
}
