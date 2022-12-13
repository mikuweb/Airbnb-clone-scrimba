export const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  } else null;

  console.log(props.item);

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={`./images/${props.item.coverImg}`} />
      <div className="content">
        <div className="rating">
          <img
            className="rating_star"
            src="./images/Star-rating.png"
            width={"14px"}
          />
          <div className="rating-point">{props.item.stats.rating}</div>
          <div className="rating-count">
            ({props.item.stats.reviewCount})・USA
          </div>
        </div>
        <div className="title">{props.item.title}</div>
        <div className="price">
          <div className="price-price">From ${props.item.price}</div>
          <div className="price-person">/ person</div>
        </div>
      </div>
    </div>
  );
};

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
