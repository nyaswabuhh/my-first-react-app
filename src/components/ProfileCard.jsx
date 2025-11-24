function ProfileCard({ name, age, profession }) {
  return (
    <div
      className="card shadow-sm p-3 mb-3"
      style={{ width: "18rem" }}   
    >
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text mb-1">Age: {age}</p>
        <p className="card-text">Profession: {profession}</p>
      </div>
    </div>
  );
}

export default ProfileCard;

