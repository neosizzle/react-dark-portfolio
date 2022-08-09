import CardDetails from "./CardDetails";

const ProjectCard = ({project, idx}) => {
	return ( 
		<div className={`lg:grid lg:grid-cols-6 m-10 my-20 ${idx % 2 === 0 ? "" : ""}`}>
			{/* Cover image */}
			<img
			src={project.cover}
			alt={project.title}
			className="block lg:col-span-3 rounded h-full w-full"
			/>
			
			{/* Project details */}
			<div
			className={`block lg:col-span-3 ${idx % 2 === 0 ? "lg:order-first" : ""}`}
			>
				<CardDetails project={project}/>
			</div>
		</div>
	 );
}
 
export default ProjectCard;