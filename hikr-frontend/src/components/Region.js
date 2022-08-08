import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Region() {
  const { region } = useParams();
  const [hike, setHike] = useState([]);
  const [loading, setLoading] = useState(true)

   console.log(region)


  useEffect(() => {
    getHikes()
  }, []);

  const getHikes = () => {
    axios.get(`https://desolate-ocean-19551.herokuapp.com/api/hikes/regions/${region}`).then((res) => {
      console.log(res.data)
        setHike(res.data);
        setLoading(false)
      });
  }

  
  let hikeList = hike.map((e) => {
    return (
      //display region info below
      <div className="regionMap" key="">
       {e.hikeName}
       <img src={e.img_url} alt={e._id} />
        <Link className = "hikeLinks" to={"/hike/" + e._id}>Hike Details</Link>
      </div>

    );
  });

return (
    <>
      {loading ? <div>Loading...</div> : <div>{hikeList}</div>}
    </>
  )
  
}
export default Region;