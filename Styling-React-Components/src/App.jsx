import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

// styling react components with 'styled-components'
export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
