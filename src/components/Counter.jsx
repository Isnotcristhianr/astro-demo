import { useState } from "preact/hooks";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="flex gap-4 items-center">
      <button 
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>

      <span class="text-xl font-bold">{count}</span>

      <button 
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}

export default Counter;