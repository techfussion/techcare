import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const username = "coalition";
const password = "skills-test";

const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const fetchAPIData = async () => {
  const response = await axios.get(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: authHeader,
      },
    },
  );
  return response.data;
};

export const useFetchAPIData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["apiData"],
    queryFn: fetchAPIData,
  });

  return { data, error, isLoading };
};
