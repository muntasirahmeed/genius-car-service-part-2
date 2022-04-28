import { useEffect, useState } from "react";

const useDetails = (id) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://whispering-thicket-66203.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return [service];
};

export default useDetails;
