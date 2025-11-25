function StudentCard({name, course, score}) {
  return (
    <>
      <div className="card shadow-sm p-3 mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text mb-1">Course: {course}</p>
          <p className="card-text">Score: {score}</p>
        </div>
      </div>
    </>
  );
}

export default StudentCard
