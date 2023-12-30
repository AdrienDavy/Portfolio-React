import devwebLibrary from "@devweb/index.devweb";
import { useState } from "react";

const Devweb = () => {
  const [siteSelected, setSiteSelected] = useState(devwebLibrary[0]);
  const handleClickSite = (site) => {
    setSiteSelected(site);
  }

  const containerStyle = {
    background: `url(${siteSelected.thumbnail}) no-repeat center`,
    backgroundSize: 'cover',
  };

  return (
    <div className="devweb-container" style={{ containerStyle }}>
      {siteSelected && (<div className="site-selection">

        <p className="number">{siteSelected?.number}</p>
        <h2>{siteSelected?.title}</h2>
        <h4>{siteSelected?.year} </h4>
        <p className="description">{siteSelected?.description} </p>
        {siteSelected?.software ? <h3>{siteSelected.software.join(" | ")} </h3> : null}
        {siteSelected?.langage ? <h3>{siteSelected.langage.join(" | ")} </h3> : null}
        <a href={siteSelected?.link} target="_blank" rel="noreferrer"> <img src={siteSelected?.thumbnail} alt={siteSelected?.title} /></a>
      </div>)}
      <div className="website-list">
        {devwebLibrary.map((website) => (
          <div className="website" key={website.id} onClick={() => handleClickSite(website)} style={{ background: `url(${website.thumbnail}) no-repeat center`, backgroundSize: 'cover' }}>
            <p className="number">{website?.number}</p>
            <div className="filter" ></div>
            <h2>{website?.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Devweb
