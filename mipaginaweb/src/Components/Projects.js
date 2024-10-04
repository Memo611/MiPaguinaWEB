import React from 'react'
import logo from '../Constants/logo.svg';
import '../Styles/Projects.css';

export const Projects = () => {
    return (
        <div>
            <h1 className='titulo'>
                Projects
            </h1>

            <div class="row row-cols-1 row-cols-md-4 custom-grid">
                <div class="col">
                    <div class="card custom-card">
                        <img src={logo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mi Pagina Web</h5>
                            <p class="card-text">Aqui cree mi portafolio donde actualizo todo lo que aprendo y los proyectos que llevo a cabo en el dia a dia.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
