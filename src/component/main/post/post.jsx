import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './post.css'


function Post() {

  const [planets, setState] = useState([]);

  async function fetchData() {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cc91feb06af14edbadee3bc9b0d784b4");
    res
      .json()
      .then((res) => setState(res))
    //.catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(planets)

  return (
    <>
    <div className="row mb-2">

      {planets.articles?.map((planets, index) =>

        <div className="col-4 mb-4" key={index}>
          <div className="card shadow-sm overflow-hidden">
            <img className="w-100 h-md-250" src={planets.urlToImage} />

            <div className="card-body">
              <h5 className="mb-2 text-truncate">{planets.title}</h5>
              <p className="card-text">{planets.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a target="_blank" href={planets.url} type="button" className="btn btn-sm btn-outline-secondary">Read More</a>

                </div>
                <small className="text-muted">{planets.publishedAt}</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="btn-group me-2" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary">Prev</button>
    <button type="button" className="btn btn-primary">Next</button>
   
  </div>
  </>
  )
}

export default Post;