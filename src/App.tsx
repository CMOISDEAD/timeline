import { Timeline } from "./components/Timeline";
import { event } from "./utils/data";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center content-center items-center h-full">
        <Timeline data={event} />
      </div>
    </div>
  );
}

export default App;
