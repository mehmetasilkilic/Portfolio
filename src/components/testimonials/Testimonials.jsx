import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      key: "a",
      name: "John Doe",
      title: "Developer",
      img:
        "https://www.crystalcare.org.uk/wp-content/uploads/2014/05/pp-blank-m.jpg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placet magnam doloresm.",
    },
    {
      id: 2,
      key: "b",
      name: "John Doe",
      title: "Developer",
      img:
        "https://www.crystalcare.org.uk/wp-content/uploads/2014/05/pp-blank-m.jpg",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibuss. ",
      featured: true,
    },
    {
      id: 3,
      key: "c",
      name: "John Doe",
      title: "Developer",
      img:
        "https://www.crystalcare.org.uk/wp-content/uploads/2014/05/pp-blank-m.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.key}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials

