import "./App.css";

function App() {
  return (
    <main className="w-full">
      <section className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-light text-blue-600">Section 1</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-red-50">
        <h1 className="text-3xl font-light">Section 2</h1>
      </section>
      <section className="h-screen flex items-center justify-center bg-red-950">
        <h1 className="text-3xl font-light">Section 3</h1>
      </section>
    </main>
  );
}
export default App;
