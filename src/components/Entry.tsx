import markerIcon from "../assets/marker.png";
import type { EntryType } from "../types";

export default function Entry(props: EntryType) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img} alt={props.title} />
      </div>
      <div className="info-container">
        <img className="marker" src={markerIcon} alt="map marker icon" />
        <span className="country">{props.country}</span>
        <a href={props.mapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
