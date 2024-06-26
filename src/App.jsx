import Footer from "./components/Footer";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-200 grid grid-rows-12 font-sans">
			<Header className=""/>
			<Board className="row-span-6 "/>
			<Keyboard className="row-span-4" />
			<Footer className=""/>
    </div>
  )
}