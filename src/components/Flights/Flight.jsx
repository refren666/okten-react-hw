const Flight = ({ flight }) => {
  const {
    mission_name,
    launchYear,
    links: { mission_patch_small },
  } = flight;

  return (
    <>
      <h2>Mission name: {mission_name}</h2>
      <h4>Launched in: {launchYear} year</h4>
      <img src={mission_patch_small} alt="Mission patch" />
    </>
  );
};

export default Flight;
