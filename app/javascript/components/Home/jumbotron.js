import React, { Component } from 'react'

const Jumbotron = () => {
    return(
        <section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <h1>React for Rails Developers</h1>
                            <p>Supercharge your Ruby on Rails apps with react.js</p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/B0SxxHAImhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron;