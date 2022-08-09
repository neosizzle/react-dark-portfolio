import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    cover : "/assets/cub3d.gif",
    title : "cub3D",
    description : "A 3D raycasting game with a self implemented raycasting engine built using C language. It reads from a map file and supports the rendering of custom wall textures, floor and ceiling colours. Ray-casting was implemented using DDA algorithm and basic trigonometry to define the size of walls drawn to the screen. It resembles the appearance of a revolutionary video game, Wolfenstein 3D.",
    stack : "Made with: C, minilibx"
  },
  {
    cover : "/assets/suria.gif",
    title : "Suria BIM-FM",
    description : "A full stack system module to manage, inspect and modify documents that relate to assets in a building. The module offers advanced data display, filtering, searching and sorting from a controlled flow of user input. It also enables the table to interact with external displays such as a 3D OpenGL ForgeViewer to highlight related assets of said building.",
    stack : "Made with: Python, Django, Docker-compose, Svelte, MaterialUI"
  },{
    cover : "/assets/webserv.gif",
    title : "webserv",
    description : "A fully-functioning HTTP webserver made using Object Oriented Standard C++. It unitilizes the TCP/IP protocol underneath Unix sockets and it obeys the HTTP 1.1 RFC making it fully compatable with any conventional web browser. It allows serving of static files, user configuration, autoindexing, file uploads, CGI execution (python, PHP) and redirection. It is based on the infamous webserver application, NGINX.",
    stack : "Made with: C++"
  },{
    cover : "/assets/minishell.gif",
    title : "minishell",
    description : "A simple Unix shell that behaves like bash. It is written in C only and is able to handle binary executables, piping, I/O Redirection, custom builtins and environment variables.",
    stack : "Made with: C"
  },{
    cover : "/assets/erpd.gif",
    title : "ERPD",
    description : "A annotation and tagging library for PDF documents. This tool is made for building managers to solve the issue on collaborating in defect inspection by letting them annotate and pinpoint the said defects on their floor plan in the form of a pdf document. It supports 3 annotation types (free hand, rectangle, ellipse) panning and zooming, highlighting and focusing and exporting annotations with the origianal pdf for printing purposes. It is also modular and allows state changes externally and can be ported to other components.",
    stack : "Made with: Reactjs, nodejs"
  },{
    cover : "/assets/sort_visualizer.gif",
    title : "Sorting visualizer",
    description : "A simple animated visualizer that displays the underlying mechanism of sorting operations. It uses no animation library and all the state changes are done purely by react hooks. It allows regeneration of the display, size change, animation speed change as well as supporting different sorting algorithms like merge sort, selection sort and bubble sort.",
    stack : "Made with: Reactjs"
  },
]

function Project({whiteMode}) {
  return (
    <section id="projects" className="">
        <span className="my-10 block flex justify-center purple-text text-5xl font-bold">
        🏡Projects{" "}
        </span>

        <div className="">
          {
            projects.map((project, i)=> <ProjectCard project={project} idx = {i} />)
          }
        </div>
    </section>
  );
}

export default Project;
