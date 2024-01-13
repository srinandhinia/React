import MainNavigation from "../Components/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Couldn't find this page...</p>
      </main>
    </>
  );
}
