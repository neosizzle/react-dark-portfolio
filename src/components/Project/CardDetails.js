const CardDetails = ({project}) => {
	return ( <div className={`h-full grid grid-row-6 py-3 lg:px-10 lg:py-5 border-5 border-black`}>

		{/* Title */}
		<div className="row-span-1 gray-text text-3xl font-medium">
		{project.title}

		</div>

		{/* Description */}
		<div className="row-span-4 gray-text">
			{project.description}
		</div>

		{/* Stack */}
		<div className="row-span-1 gray-text text-sm">
			{project.stack}
		</div>
		</div> );
}
 
export default CardDetails;