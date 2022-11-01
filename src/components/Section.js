const Section = (props) => {
  return (
    <div className="category-block">
      <h2 className="category-name">{props.category}</h2>
      {/* {console.log(props.category)} */}
      <ul className="movie-list">
        {props.images.map((elem, index) => {
          return (
            <li key={index}>
              <img className="movie-poster" src={elem} alt="Movie poster" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Section;
