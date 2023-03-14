import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import hus from "../images/hus.png";
export const HomeComponent = () => {

  return (
    <div>
      <main className="mainsection">
      <div className="title">
          <h3>En sida som räknar och håller koll på dina tider.</h3>
          <h1>- Så att du slipper.</h1>
        </div>

        <div className="section">

        {/* Card 1 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Skapa nytt projekt</h5>
                  <p className="card-text">Här skapar man ett nytt projekt.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/newProject">
                    <Button>Skapa nytt projekt</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Card 2 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Aktiva projekt</h5>
                  <p className="card-text">Här ser man alla aktiva projekt.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/activeProjects">
                    <Button>Aktiva projekt</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Card 3 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Tidigare projekt</h5>
                  <p className="card-text">Här ser man tidigare projekt.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/InactiveProjects">
                    <Button>Tidigare projekt</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Card 4 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Lista med alla projekt</h5>
                  <p className="card-text">Här ser man alla projekt</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/projectsList">
                    <Button>Projektlista</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Card 5 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Tidsrapportering</h5>
                  <p className="card-text">Här rapporterar man tid för projektet.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/reportTime">
                    <Button>Tidsrapportering</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Card 6 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Lägg till personal</h5>
                  <p className="card-text">Här lägger man till personal.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/addEmployee">
                    <Button>Lägg till</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Card 7 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">Här skapar man ett nytt projekt.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/newProject">
                    <Button>Skapa nytt projekt</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        {/* Card 8 */}
          <div className="card mb-3" style={{ maxWidth: "450px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={hus} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Skapa nytt projekt</h5>
                  <p className="card-text">Här skapar man ett nytt projekt.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div>
                  <Link to="/newProject">
                    <Button>Skapa nytt projekt</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
