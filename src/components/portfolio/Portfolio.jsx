import "./portfolio.scss"
import { Link } from "react-router-dom"

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    img: "assets/ecom.jpg",
    site: "asdf",
  },
  {
    id: 2,
    title: "JDM Blog",
    img: "assets/jdmblog.jpg",
    site: "klşi",
  },
  {
    id: 3,
    title: "Portfolio",
    img: "assets/portfolio.jpg",
    site: "hjkl",
  },
  {
    id: 4,
    title: "Fobbo",
    img: "assets/fobbo.jpg",
    site: "fghj",
  },
];


const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      <h1>Latest Works</h1>
      <div className="container">
        {projects.map((project, id) => (
          <div className="wrapper" key={id}>
            <div className="imgWrapper">
              <img src={project.img} alt="" />
            </div>
            <div className="titleWrapper">
              <h3>{project.title}</h3>
            </div>
            <div className="buttonWrapper">
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
