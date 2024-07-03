export default function ErrorPopup({ className, errorMessage, showError, onAnimationEnd }){
	return (
		<div 
			className={`w-3/4 flex justify-center items-center absolute bottom-1/4 left-1/2 -translate-x-1/2 bg-gray-500 border-red-500 border-4 rounded-full text-white p-2 shadow-md shadow-gray-500/50 opacity-0 ${showError && 'animate-popup'} ${className}`}
			onAnimationEnd={onAnimationEnd}
		>
			{errorMessage}
		</div>
	)
}