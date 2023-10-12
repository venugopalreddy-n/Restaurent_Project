const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
