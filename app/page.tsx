import Cinema from "./screens/cinema/Cinema";
import { setupStore } from "./store/store";

const store = setupStore();

export default function Home() {
  return (
    <Cinema />
  );
}
