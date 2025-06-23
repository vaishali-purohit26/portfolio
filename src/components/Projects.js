import React from "react";
import "./Projects.css";
import {
  FaFileExcel,
  FaDatabase,
  FaFilePowerpoint,
  FaFilePdf,
  FaVideo,
  FaFileWord,
} from "react-icons/fa";

const Projects = ({ theme }) => {
  const publicPath = process.env.PUBLIC_URL;

  return (
    <section className={`projects-section ${theme}`} id="projects">
      <div className="container">
        <h2
          className="section-title text-center mb-5 animate__animated animate__fadeInUp"
          data-scroll
          data-scroll-speed="1"
        >
          Projects
        </h2>

        {/* Swiggy Dashboard Section */}
        <div className="project-section mb-5">
          <h3 className="section-subtitle animate__animated animate__fadeInLeft">
            <FaFilePdf className="icon" /> Swiggy Dashboard Project
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFileExcel className="pdf-icon text-success" />
                  <div>
                    <h5 className="pdf-title">Excel Files</h5>
                    <p className="pdf-desc">Raw data files used for analysis.</p>
                  </div>
                </div>
                <div className="d-flex flex-row gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <a
                      key={num}
                      href={`${publicPath}/projects/swiggy-dashboard/data${num}.csv`}
                      className="btn-download"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Excel {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePowerpoint className="pdf-icon text-danger" />
                  <div>
                    <h5 className="pdf-title">Power BI PBIX File</h5>
                    <p className="pdf-desc">Power BI dashboard project file.</p>
                  </div>
                </div>
                <a
                  href={`${publicPath}/projects/swiggy-dashboard/report.pbix`}
                  className="btn-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PBIX
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePdf className="pdf-icon text-primary" />
                  <div>
                    <h5 className="pdf-title">Project Slides PDF</h5>
                    <p className="pdf-desc">
                      Download all presentation slides in a single PDF file.
                    </p>
                  </div>
                </div>
                <a
                  href={`${publicPath}/projects/swiggy-dashboard/swiggy-slides.pdf`}
                  className="btn-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Slides
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SuperStore Dashboard Section */}
        <div className="project-section mb-5">
          <h3 className="section-subtitle animate__animated animate__fadeInLeft">
            <FaFilePdf className="icon" /> SuperStore Sales Dashboard Project
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFileExcel className="pdf-icon text-success" />
                  <div>
                    <h5 className="pdf-title">Excel Files</h5>
                    <p className="pdf-desc">Raw data files used for analysis.</p>
                  </div>
                </div>
                <div className="d-flex flex-row gap-2">
                  <a
                    href={`${publicPath}/projects/superstore-dashboard/data1.xlsx`}
                    className="btn-download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Excel 1
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePowerpoint className="pdf-icon text-danger" />
                  <div>
                    <h5 className="pdf-title">PBIX File</h5>
                    <p className="pdf-desc">Power BI project file.</p>
                  </div>
                </div>
                <a
                  href={`${publicPath}/projects/superstore-dashboard/report.pbix`}
                  className="btn-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PBIX
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePdf className="pdf-icon text-primary" />
                  <div>
                    <h5 className="pdf-title">Slides PDF</h5>
                    <p className="pdf-desc">Presentation file in PDF format.</p>
                  </div>
                </div>
                <a
                  href={`${publicPath}/projects/superstore-dashboard/superstore-slides.pdf`}
                  className="btn-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Slides
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="video-section">
          <h3 className="section-subtitle animate__animated animate__fadeInLeft">
            <FaVideo className="icon" /> Project Demo Videos
          </h3>
          <div className="row g-4">
            {[
              {
                title: "Swiggy Dashboard",
                video: "swiggy-dashboard.mp4",
              },
              {
                title: "SuperStore Sales Dashboard",
                video: "superstore-dashboard.mp4",
              },
            ].map((vid, index) => (
              <div key={index} className="col-md-6">
                <div className="card shadow video-card animate__animated animate__fadeInUp">
                  <div className="card-body">
                    <h5 className="card-title">{vid.title}</h5>
                    <div className="video-container">
                      <video controls>
                        <source
                          src={`${publicPath}/videos/${vid.video}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
