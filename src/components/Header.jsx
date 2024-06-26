export default function Header({ className }){
	return (
		<header className={`p-4 gap-2 h-full flex items-center bg-[#3A4D39] ${className}`}>
			<span className="grid place-items-center bg-white h-full aspect-square font-bold text-xl text-[#3A4D39] rounded-sm shadow-md shadow-gray-300">W</span>
			<h1 className="text-white text-2xl font-semibold">Wordle</h1>
		</header>
	)
}