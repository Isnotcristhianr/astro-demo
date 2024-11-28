const getLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        limit: 25
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};

export { getLaunches as g };
