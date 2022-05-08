import React from 'react'

const Main = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectId = urlParams.get('id')

    return (
        <div className="projectMain">
            <div className="top">
                <div className="topWrapper">
                    <h2>The Project</h2>
                    <div className="descWrapper">
                        {/* {projectId == 0 ? <span>AuWallet</span> : projectId == 1 ? <span>TimeEX</span> : projectId == 2 ? <span>Admin Panel</span> : projectId == 3 ? <span>E-commerce</span> : ""} */}
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam sequi autem temporibus eius nisi qui distinctio eligendi, vitae ratione a aspernatur cumque cupiditate provident sunt est inventore ipsa, rem consectetur natus eveniet, consequatur rerum asperiores! Ipsum hic autem, ratione veniam modi praesentium sapiente quisquam deserunt impedit temporibus nostrum ipsa?</span>
                        <div className="buttonWrapper">
                            <a href="https://makecom.herokuapp.com/" rel="noreferrer noopener" target="_blank"><button>Visit Website</button></a>
                            <a href="https://makecomadmin.herokuapp.com/" rel="noreferrer noopener" target="_blank"><button>Visit Admin Panel</button></a>
                            <a href="https://github.com/mehmetasilkilic/ecomclient" rel="noreferrer noopener" target="_blank"><button>Visit Website's GitHub</button></a>
                            <a href="https://github.com/mehmetasilkilic/ecomadminpanel" rel="noreferrer noopener" target="_blank"><button>Visit Admin Panel's GitHub</button></a>
                        </div>
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
                        <img src="assets/anlys.jpg" alt="" />
                    </div>
                </div>
                <div className="colorPalette">
                    <div style={{ backgroundColor: projectId == 0 ? '#1296db' : projectId == 1 ? '#131313 ': projectId == 2 ? '#e96500' : projectId == 3 ? '#131313': "" }} className="colorDiv">{projectId == 0 ? <span>#1296db</span> : projectId == 1 ? <span>#131313</span> : projectId == 2 ? <span>#e96500</span> : projectId == 3 ? <span>#131313</span>: ""}</div>
                    <div style={{ backgroundColor: projectId == 0 ? '#7adeff' : projectId == 1 ? '#131313 ': projectId == 2 ? '#1cb9fd' : projectId == 3 ? '#969696': "" }} className="colorDiv">{projectId == 0 ? <span>#7adeff</span> : projectId == 1 ? <span>#131313</span> : projectId == 2 ? <span>#1cb9fd</span> : projectId == 3 ? <span>#969696</span>: ""}</div>
                    <div style={{ backgroundColor: projectId == 0 ? '#ffffff' : projectId == 1 ? '#131313 ': projectId == 2 ? '#e5e5e5' : projectId == 3 ? '#dddddd': "" }} className="colorDiv">{projectId == 0 ? <span>#ffffff</span> : projectId == 1 ? <span>#131313</span> : projectId == 2 ? <span>#e5e5e5</span> : projectId == 3 ? <span>#dddddd</span>: ""}</div>
                    <div style={{ backgroundColor: projectId == 0 ? '#cfd9de' : projectId == 1 ? '#131313 ': projectId == 2 ? '#898989' : projectId == 3 ? '#ffffff': "" }} className="colorDiv">{projectId == 0 ? <span>#cfd9de</span> : projectId == 1 ? <span>#131313</span> : projectId == 2 ? <span>#898989</span> : projectId == 3 ? <span>#ffffff</span>: ""}</div>
                    <div style={{ backgroundColor: projectId == 0 ? '#212529' : projectId == 1 ? '#131313 ': projectId == 2 ? '#333333' : projectId == 3 ? '#c7baa8': "" }} className="colorDiv">{projectId == 0 ? <span>#212529</span> : projectId == 1 ? <span>#131313</span> : projectId == 2 ? <span>#333333</span> : projectId == 3 ? <span>#c7baa8</span>: ""}</div>
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

export default Main
