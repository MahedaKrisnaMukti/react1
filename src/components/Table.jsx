const Table = (props) => {
  return (
    <table className="table-auto min-w-full leading-normal" id="table-student">
      <thead>
        <tr>
          <th className="table-head">No</th>
          <th className="table-head">Full Name</th>
          <th className="table-head">Birth Date</th>
          <th className="table-head">Gender</th>
          <th className="table-head">Faculty</th>
          <th className="table-head">Program Study</th>
          <th className="table-head">Option</th>
        </tr>
      </thead>

      <tbody>
        {props.students?.map((student, index) => (
          <tr key={index}>
            <td className="table-d">{student.id}</td>
            <td className="table-d">{student.fullname}</td>
            <td className="table-d">{student.birthDate}</td>
            <td className="table-d">{student.gender}</td>
            <td className="table-d">{student.faculty}</td>
            <td className="table-d">{student.programStudy}</td>
            <td className="table-d">
              <span className="text-red-500 cursor-pointer">Delete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
