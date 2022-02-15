//dependencies
import './Roster.css'
//components

const Roster = ({myRaidTeam, remove}) => {

  let roster = myRaidTeam.map((player, index) => {
    return (
      <div key={index}>
        <p>{player?.name}</p>
        <button onClick={() => remove(player)}>Drop Player</button>
      </div>
    )
  });

  return (
    <>
      {roster}
    </>
  );
};

export default Roster;