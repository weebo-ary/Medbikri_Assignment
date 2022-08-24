import { useEffect, useState } from "react";
import {Link} from "react-router-dom"



const Launch = () => {

    // declare intrface
    interface Launch {
        full_name: string;
        details: string;
        name: string;
        launches: string;
        status: string;
        id: number;
    }
    // declare state
    const [launches, setLaunches] = useState<Launch[]>([]);
    // declare async function
    const getLaunches = async () => {
        const response = await fetch("https://api.spacexdata.com/v4/launchpads");
        const data = await response.json();
        setLaunches(data);
        console.log(data);
    }
    // use effect to call async function
    useEffect(() => {
        getLaunches();
    } , []);
    // return JSX
    return (
        <div>
            <h1>SpaceX Launches</h1>
            {/* Loading if no data */}

            {launches.length === 0 ? <h1>Loading...</h1> : (
                <div>
                    {/* map through data */}
                {launches.map(launch => (
                    <div className="launching" key = {launch.id}>
                        <div className="launch-details">
                        <h2>
                            {launch.full_name}
                        </h2>
                        <br/>
                        <h5>
                            {launch.details}
                        </h5>
                        <br/>
                        <div className="status">
                        <h3>
                            {launch.status}
                        </h3>
                        <div className="active">
                        <p>
                            <span>{launch.launches[0] ? <Link to = "/launchpad" >{launch.launches[0]}</Link> : <><p className="noLaunch">No Launch Available</p></>}</span>
                        </p>
                        <p>
                            <span>{launch.launches[1] ? <Link to = "/launchpad" >{launch.launches[1]} </Link>: <><p >No Launch Available</p></>}</span>
                        </p>
                        <p>
                            <span>
                            {launch.launches[2] ? <Link to = "/launchpad" >{(launch.launches[2])}</Link> : <><p className="noLaunch">No Launch Available</p></>}
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
}

export default Launch;