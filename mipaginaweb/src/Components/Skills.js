import React from 'react'
import logo from '../Constants/logo.svg';
import js from '../Constants/js.svg';
import html from '../Constants/html.svg';
import css from '../Constants/css.svg';
import java from '../Constants/java.svg';
import react from '../Constants/react.svg';
import C from '../Constants/C.svg';
import '../Styles/Skills.css';
export const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>

      {/* Diseño de cards para skills */}

      <div class="row row-cols-md-7 custom-grid-skills">
        <div class="col">
          <div class="card custom-card-skills">
            <img src={js} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={html} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={css} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={java} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={react} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card custom-card-skills">
            <img src={C} class="card-img-top-skills" alt="..." />
            <div class="card-body">

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
