import "./portfolio.scss"

const projects = [
  {
    id: 1,
    key: "a",
    title: "E-Commerce",
    img: "assets/ecom.jpg",
  },
  {
    id: 2,
    key: "b",
    title: "JDM Blog",
    img: "assets/jdmblog.jpg",
  },
  {
    id: 3,
    key: "c",
    title: "Portfolio",
    img: "assets/portfolio.jpg",
  },
  {
    id: 4,
    key: "d",
    title: "Fobbo",
    img: "assets/fobbo.jpg",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {projects.map((project) => (
          <div className="wrapper">
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
