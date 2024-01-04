import devwebLibrary from "@devweb/index.devweb";
import React, { useState } from "react";

const Devweb = () => {
  const [siteSelected, setSiteSelected] = useState(devwebLibrary[0]);
  const [siteActive, setSiteActive] = useState();

  const handleClickSite = (site) => {
    setSiteSelected(site);
  }
  const handleActive = (website) => {
    setSiteActive(website);
    console.log("active");
  }
  const nouvelOeilLink = "https://www.nouvel-oeil.com/"



  return (
    <div className="devweb-container" style={{ background: `url(${siteSelected.thumbnail}) no-repeat center` }}>
      {siteSelected && (<div className="site-selection">
        <div className="text">
          <p className="number">{siteSelected?.number}</p>
          <h2>{siteSelected?.title}</h2>
          <h4>{siteSelected?.year} </h4>
          <p className="description">{siteSelected?.description.includes("Nouvel Oeil") ? (
            siteSelected?.description.split("Nouvel Oeil").map((part, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <a href={nouvelOeilLink} target="_blank" rel="noreferrer" title="Vers le site de Nouvel Oeil">
                    <span>Nouvel Oeil</span>
                  </a>
                )}
                {part}
              </React.Fragment>
            ))
          ) : siteSelected?.description} </p>
          {siteSelected?.software ? <h3>{siteSelected.software.join(" | ")} </h3> : null}
          {siteSelected?.langage ? <h3>{siteSelected.langage.join(" | ")} </h3> : null}
        </div>
        <div className="image-link">
          <a href={siteSelected?.link} target="_blank" rel="noreferrer" title={`Vers le site de ${siteSelected?.title}`}>
            <img src={siteSelected?.thumbnail} alt={siteSelected?.title} />
          </a>
        </div>
        <div className="website-list">
          {devwebLibrary.map((website) => (
            <div className={`website${website === siteActive ? " active" : ""}`} key={website.id} onClick={() => {
              handleClickSite(website);
              handleActive(website);
            }} style={{ background: `url(${website.thumbnail}) no-repeat center`, backgroundSize: 'cover' }}>
              <div className="filter-site">
                <p className="number">{website?.number}</p>
                <h2>{website?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>)
      }

    </div >
  )
}

export default Devweb
