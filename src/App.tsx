import { useState } from "react";
import InfiniteScroll from "./components/Infinite-scroll/Infinite-scroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      inventore quisquam, vero minus ab recusandae accusantium aut maiores quia
      incidunt quo officiis excepturi eveniet molestias, est esse repellendus
      voluptatum. Ullam? Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Consectetur voluptas illo accusamus obcaecati non. Optio libero
      eaque alias iste error obcaecati ad ipsum, quia aspernatur cum repellat ea
      ab sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      <InfiniteScroll />
    </>
  );
}

export default App;
