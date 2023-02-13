import { useState } from "react";
import InfiniteScroll from "./components/Infinite-scroll/Infinite-scroll";
import InfiniteScroll2 from "./components/Infinite-scroll2/Infinite-scroll2";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        inventore quisquam, vero minus ab recusandae accusantium aut maiores
        quia incidunt quo officiis excepturi eveniet molestias, est esse
        repellendus voluptatum. Ullam? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur voluptas illo accusamus obcaecati non.
        Optio libero eaque alias iste error obcaecati ad ipsum, quia aspernatur
        cum repellat ea ab sit. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit.
      </p>
      {/* <InfiniteScroll /> */}
      <InfiniteScroll2 />
      {/* <div className="flex items-center justify-center bg-slate-600">
        <h1 className="bg-black text-3xl font-bold text-cyan-400 underline hover:text-sky-700">
          Hello world!!!
        </h1>
      </div> */}
      <Login />
    </>
  );
}

export default App;
