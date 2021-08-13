const Members = ({ members }) => {
  return (
    <div className="bg-white flex-grow rounded-lg p-5 md:p-10 mt-5 md:mt-0 space-y-10 overflow-auto">
      <h1 className="text-2xl font-bold">Members</h1>
      <div className="flex flex-wrap items-center">
        {members.results.map((member) => (
          <div
            key={member.name.first}
            className="flex flex-col items-center space-y-3 font-semibold text-xl mr-5 mt-5 md:mt-0"
          >
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <img
                className="avatar"
                src={member.picture.thumbnail}
                alt={member.name.first}
              />
            </div>

            <h2>{member.name.first}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
