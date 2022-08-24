import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../api.services";
import Loader from "./Loader";

function LaunchPage() {
  const { id } = useParams();

  const [name, setName] = useState("");

  const [date_local, setDate_local] = useState("");

  const [details, setDetails] = useState("");

  useEffect(() => {
    console.log(id);
    const fetchLaunch = async () => {
      const res = await ApiService.getOneLaunch(id);
      console.log(res.data);
      const { name, details, date_local } = res.data;
      setName(name);
      setDetails(details);
      setDate_local(date_local);
    };
    fetchLaunch();
  }, [id]);

  return (
    <div className="launchPad">
      {name === "" ? (
        <Loader />
      ) : (
        <div className="contentPad">
          <h1>{name}</h1> <br />
          <h3 style={{ color: "green" }}>
            {!details ? (
              <h3 style={{ color: "red" }}>No Details Found</h3>
            ) : (
              details
            )}
          </h3>
          <br />
          <div className="date-time">
            <h3>Date : {date_local.slice(0, 10)}</h3>
            <br />
            <h3>Time : {date_local.slice(11, 19)}</h3>
          </div>
          <br/>
          <Link to="/"> Go Back</Link>
        </div>
      )}
    </div>
  );
}

export default LaunchPage;
