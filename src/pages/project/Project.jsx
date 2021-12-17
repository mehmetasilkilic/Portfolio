import "./project.scss";

const Project = () => {
    return (
        <div className="project">
            <div className="top">
                <div className="imgWrapper">
                    <img src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <h1>E-commerce</h1>
                <div className="descWrapper">
                    <h2>The Project</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam sequi autem temporibus eius nisi qui distinctio eligendi, vitae ratione a aspernatur cumque cupiditate provident sunt est inventore ipsa, rem consectetur natus eveniet, consequatur rerum asperiores! Ipsum hic autem, ratione veniam modi praesentium sapiente quisquam deserunt impedit temporibus nostrum ipsa?</span>
                    <div className="buttonWrapper">
                        <a href="https://makecom.herokuapp.com/" rel="noreferrer noopener" target="_blank"><button>Visit Website</button></a>
                        <a href="https://makecomadmin.herokuapp.com/" rel="noreferrer noopener" target="_blank"><button>Visit Admin Panel</button></a>
                        <a href="https://github.com/mehmetasilkilic/ecomclient" rel="noreferrer noopener" target="_blank"><button>Visit Website's GitHub</button></a>
                        <a href="https://github.com/mehmetasilkilic/ecomadminpanel" rel="noreferrer noopener" target="_blank"><button>Visit Admin Panel's GitHub</button></a>
                    </div>
                </div>
            </div>
            <div className="middle">
                <h3>Analysis</h3>
                <div className="wrapper">
                    <div className="left">
                        <h4>Design</h4>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate maxime. Iure eum, et dicta, repudiandae molestiae facere porro ex excepturi a alias commodi perspiciatis totam cupiditate consectetur quis odio.</span>
                        <br />
                        <br />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate maxime. Iure eum, et dicta, repudiandae molestiae facere porro ex excepturi a alias commodi perspiciatis totam cupiditate consectetur quis odio.</span>
                    </div>
                    <div className="right">
                        <img src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                </div>
                <div className="colorPalette">
                    <div style={{ backgroundColor: '#131313' }} className="colorDiv"><span>#131313</span></div>
                    <div style={{ backgroundColor: '#969696' }} className="colorDiv"><span>#969696</span></div>
                    <div style={{ backgroundColor: '#dddddd' }} className="colorDiv"><span>#dddddd</span></div>
                    <div style={{ backgroundColor: '#ffffff' }} className="colorDiv"><span>#ffffff</span></div>
                    <div style={{ backgroundColor: '#c7baa8' }} className="colorDiv"><span>#c7baa8</span></div>
                </div>
            </div>
            <div className="bottom">
                <h3>UI and Components</h3>
                <img src="assets/kolaj.png" alt="" />
            </div>
            <div className="next"></div>
        </div>
    )
}

export default Project
