import { useState, useMemo } from "react";

import { fetchStates, fetchLga } from "../api";

function Temp() {
  const [getState, setState] = useState([]);
  const [getlga, setlga] = useState([]);
  const [lgas, setlgas] = useState([]);
  const [isloading, setisloading] = useState(1);

  useMemo(() => {
    fetchStates()
      .then((response) => {
        setState(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useMemo(() => {
    fetchLga()
      .then((response) => {
        // console.log(response);
        setlga(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  const drop = {
    State: getState,
    Lga: getlga,
  };

  const changetolga = (e) => {
    //
    let filterlgas = drop.Lga.filter(
      (item) => item.state_id === parseInt(e.target.value)
    );
    //console.log(filterlgas);
    setlgas(filterlgas);
    setisloading(0);
  };

  return (
    <>
      State
      <select onChange={(e) => changetolga(e)} name="state_of_origin">
        <option value="">Select State</option>
        {drop.State.map((item) => {
          return (
            <option value={item.state_id} key={item.state_id}>
              {item.state_name}
            </option>
          );
        })}
      </select>
      <div>
        Lga
        <select>
          {isloading && <option value="">Select LGA</option>}
          {lgas.map((item) => {
            return (
              <option value={item.lga_id} key={item.lga_id}>
                {item.lga_name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Temp;
