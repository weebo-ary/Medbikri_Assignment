import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import Loader from "./Loader";

const Launch = () => {
  interface Launch {
    full_name: string;
    details: string;
    name: string;
    launches: string;
    status: string;
    id: number;
    images: any;
    large: undefined;
  }

  const [launches, setLaunches] = useState<Launch[]>([]);

  const getLaunches = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launchpads");
    const data = await response.json();
    setLaunches(data);
    console.log(data);
  };

  useEffect(() => {
    getLaunches();
  }, []);

  return (
    <div>
      <Header />
      {launches.length === 0 ? (
        <Loader />
      ) : (
        <div>
          {/* map through data */}
          {launches.map((launch) => (
            <div className="launching" key={launch.id}>
              <div className="launch-details">
                <img src={launch.images.large} alt={launch.name} />
                <h2>{launch.full_name}</h2>
                <br />
                <h5>{launch.details}</h5>
                <br />
                <div className="status">
                  <h3>
                    {launch.status === "under construction" ? (
                      <>
                        <span className="under-construction">
                          {launch.status}
                        </span>
                      </>
                    ) : launch.status === "active" ? (
                      <span className="active">{launch.status}</span>
                    ) : (
                      <span className="inactive">{launch.status}</span>
                    )}
                  </h3>
                  <div className="active">
                    <p>
                      <span>
                        {launch.launches[0] ? (
                          <>
                            Launch 1 :
                            <Link to={`/launchpad/${launch.launches[0]}`}>
                              {launch.launches[0]}
                            </Link>
                          </>
                        ) : (
                          <>
                            <p className="noLaunch">No Launch Available</p>
                          </>
                        )}
                      </span>
                    </p>
                    <p>
                      <span>
                        {launch.launches[1] ? (
                          <>
                            {" "}
                            Launch 2 :
                            <Link to={`/launchpad/${launch.launches[1]}`}>
                              {launch.launches[1]}{" "}
                            </Link>{" "}
                          </>
                        ) : (
                          <>
                            <p>No Launch Available</p>
                          </>
                        )}
                      </span>
                    </p>
                    <p>
                      <span>
                        {launch.launches[2] ? (
                          <>
                            {" "}
                            Launch 3 :
                            <Link to={`/launchpad/${launch.launches[2]}`}>
                              {launch.launches[2]}
                            </Link>{" "}
                          </>
                        ) : (
                          <>
                            <p className="noLaunch">No Launch Available</p>
                          </>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Launch;
