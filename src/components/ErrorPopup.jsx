export default function ErrorPopup({ className, errorMessage, showError, onAnimationEnd }){
	return (
		<div 
			className={`w-3/4 flex justify-center items-center absolute bottom-1/3 left-1/2 -translate-x-1/2 bg-gray-300 border-red-500 border-4 rounded-full text-red-500 font-semibold p-2 shadow-md shadow-gray-500/50 opacity-0 ${showError ? 'animate-popup' : 'hidden'} ${className}`}
			onAnimationEnd={onAnimationEnd}
		>
			{errorMessage}
		</div>
	)
}