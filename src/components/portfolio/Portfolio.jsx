import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="new">
          <a target="_blank" href="https://github.com/mehmetasilkilic/MPerformanceSite"><img src="assets/msite.jpg" alt="" className="image" /></a>
          <h2 className="title">BMW M Performance Site</h2>
        </div>
        <div className="new">
          <a target="_blank" href="https://github.com/mehmetasilkilic/Portfolio.git"><img src="assets/portfolio.jpg" alt="" className="image" /></a>
          <h2 className="title">Portfolio Site</h2>
        </div>
        <div className="new">
        <a target="_blank" href="https://github.com/mehmetasilkilic/JDMBlog"><img src="assets/jdmblog.jpg" alt="" className="image" /></a>
          <h2 className="title">JDM Blog</h2>
        </div>
        <div className="new">
        <a target="_blank" href="https://github.com/mehmetasilkilic/FobboTanitim"><img src="assets/fobbo.jpg" alt="" className="image" /></a>
          <h2 className="title">Fobbo Promotion Site</h2>
        </div>
      </div>
    </div>
  )
}
