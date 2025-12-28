import NewProject from "./components/NewProject";
import ProtectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProtectsSidebar />
        <NewProject />
      </main>
    </>
  );
}

export default App;
