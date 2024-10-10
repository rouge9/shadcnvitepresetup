import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click {count}
      </Button>
    </div>
  );
}

export default App;
