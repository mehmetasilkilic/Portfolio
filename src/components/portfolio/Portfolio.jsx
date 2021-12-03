import "./portfolio.scss"

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imgWrapper">
            <img src="assets/ecom.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="title">E-commerce</h2>
            <a target="blank" href="https://makecom.herokuapp.com/">Web Site</a>
            <a target="blank" href="https://makecomadmin.herokuapp.com/">Admin Panel</a>
            <a target="blank" href="https://github.com/mehmetasilkilic/ecomclient">Client Github</a>
            <a target="blank" href="https://github.com/mehmetasilkilic/ecomadminpanel">Admin Panel Github</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="imgWrapper">
            <img src="assets/portfolio.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="title">Portfolio</h2>
            <a target="blank" href="https://github.com/mehmetasilkilic/Portfolio.git">Github</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="imgWrapper">
            <img src="assets/jdmblog.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="title">JDM Blog</h2>
            <a target="blank" href="https://github.com/mehmetasilkilic/JDMBlog">Github</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="imgWrapper">
            <img src="assets/msite.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="title">BMW M Performance Site</h2>
            <a target="blank" href="https://github.com/mehmetasilkilic/MPerformanceSite">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
