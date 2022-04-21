import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './post.css'


function Post() {

  const [planets, setState] = useState([]);

  async function fetchData() {
    const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cc91feb06af14edbadee3bc9b0d784b4");
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
    <div className="row mb-2">
    
     {planets.articles?.map((planets) =>
      //    <div className="col-md-6" key={planets.id}>
      //    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      //      <div className="col p-4 d-flex flex-column position-static">
      //        <strong className="d-inline-block mb-2 text-primary">India</strong>
      //        <h3 className="mb-0">{planets.title}</h3>
      //        <div className="mb-1 text-muted">{planets.email}</div>
      //        <p className="card-text mb-auto">{planets.body}</p>
      //        <Link to="/postDetails" className="stretched-link">Continue reading</Link>
      //      </div>
      //      <div className="col-auto d-none d-lg-block">
      //        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      //      </div>
      //    </div>
      //  </div>


          <div class="col-4 mb-4" key={planets.id}>
          <div class="card shadow-sm overflow-hidden">
          <img className="w-100 h-md-250" src={planets.urlToImage}/>

            <div class="card-body">
            <h5 className="mb-2 text-truncate">{planets.title}</h5>
              <p class="card-text">{planets.content}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a target="_blank" href={planets.url} type="button" class="btn btn-sm btn-outline-secondary">Read More</a>
                 
                </div>
                <small class="text-muted">{planets.publishedAt}</small>
              </div>
            </div>
          </div>
        </div>


     )}
    </div>
  )
}

export default Post;