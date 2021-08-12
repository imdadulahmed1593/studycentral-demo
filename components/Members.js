const Members = ({ members }) => {
  return (
    <div className="bg-white flex-grow rounded-lg p-10 space-y-10">
      <h1 className="text-2xl font-bold">Members</h1>
      <div className="flex items-center space-x-5">
        {members.results.map((member) => (
          <div
            key={member.name.first}
            className="flex flex-col items-center space-y-3 font-semibold text-xl"
          >
            <img
              className="avatar"
              src={member.picture.thumbnail}
              alt={member.name.first}
            />
            <h2>{member.name.first}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
