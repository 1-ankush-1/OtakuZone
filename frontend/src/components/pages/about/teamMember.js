

const TeamMemberList = [
    { "id": "1", "image": "", "name": "me", "position": "full stack developer" },
    { id: "2", image: "", name: "you", position: "full stack developer" },
]

const TeamMember = () => {
    return (
        <div className="grid max-w-[900px] mx-auto items-start gap-6 lg:grid-cols-2 lg:gap-12">
            {
                TeamMemberList.map((member) => (
                    <div className="flex flex-col gap-2">
                        <img
                            alt={member.name}
                            className="mx-auto rounded-full overflow-hidden object-cover object-center w-24 aspect-square border"
                            height="400"
                            src={member.image}
                            width="400"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{member.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamMember;