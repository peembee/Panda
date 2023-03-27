import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/info.css";
import pandish from "../images/pandishpic.png";

export function Information() {
  return (
    <div className="infoStyle">
      <h1 id="infoHeader">Panda Management</h1>
      <h2 className="info-h2">
        Panda Management är ett företag som erbjuder tidshanteringstjänster för
        att underlätta övervakningen av anställdas arbete och projekt. Genom
        företagets plattform kan arbetsgivare ha koll på anställdas arbetstid
        och projektstatus för att effektivisera arbetsflödet och optimera
        prestationen.
      </h2>
      <h3 className="info-h3">
        När du blir tillagd i formuläret och blir en anställd på Panda
        Management, kommer chefer och administratörer att ha tillgång till din
        information. Detta inkluderar information om dina arbetstimmar och tid
        på projekt som du har rapporterat in. Detta hjälper företaget att
        hantera projekt och personal på ett mer effektivt sätt.
      </h3>
      <h4 className="info-h4">
        Är du intresserad av våra tjänster eller är du intresserad av vårt
        företag och har några frågor eller funderingar?
        <br></br>
        Tveka inte att höra av dig till oss på:
      </h4>
      <div className="info-container">
        <h5 className="info-h5">
          Maila oss på:
          <a href="mailto:pandamanagement@panda.com">
            pandamanagement@panda.com
          </a>
          <br></br>
          Ring oss på: <a href="tel:+46701234567">070-123 45 67</a>
          <br></br>
          Besök oss på: Kungspandagatan 1, 101 23, Stockholm, Sverige
        </h5>
        <img
          className="small-image"
          src={pandish}
          alt="En bild på en Panda"
        ></img>
      </div>
    </div>
  );
}
