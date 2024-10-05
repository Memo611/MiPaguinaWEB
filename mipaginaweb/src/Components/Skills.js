import React from 'react'
import logo from '../Constants/logo.svg';
import '../Styles/Skills.css';
export const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>

      {/* Diseño de cards para skills */}

      <div class="row row-cols-md-7 custom-grid-skills">
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={logo} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
