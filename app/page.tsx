import Todos from "@/components/Todos";
import Todo from "../components/Todo";

export default function Home() {
  return (
    <div className="bg-slate-500 border absolute right-0 top-0 bottom-0 left-72">
      <Todos />
    </div>
  );
}
