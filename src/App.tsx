import { lazy, Suspense } from "react";

//custom component imports
const Input = lazy(() => import("./components/atoms/Input/Input"));

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Input />
    </Suspense>
  );
}

export default App;
