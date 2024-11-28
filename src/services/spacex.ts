import type { APISpaceXresponse } from "../types/api";

export const getLaunches = async (): Promise<APISpaceXresponse[]> => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        limit: 25
      }
    }),
  });
  const { docs: launches } = (await res.json()) as APISpaceXresponse;

  return launches;
};

//obtener una launch por id
export const getLaunchById = async (id: string) => {
  const url = `https://api.spacexdata.com/v5/launches/${id}`;
  console.log("Fetching URL:", url);

  const res = await fetch(url);
  const launch = await res.json();

  console.log("Resultado del fetch:", launch);
  return launch;
};
