import React from 'react'
import js from '../Constants/Educations/js.svg';
import html from '../Constants/Educations/html.svg';
import css from '../Constants/Educations/css.svg';
import java from '../Constants/Educations/java.svg';
import react from '../Constants/Educations/react.svg';
import C from '../Constants/Educations/C.svg';
import '../Styles/Educations.css';
export const Educations = () => {
    return (
        <div>
            <h1>Educations</h1>

            {/* Diseño de cards para Eduacations */}

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
