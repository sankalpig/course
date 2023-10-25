import React from 'react'
import img from '../images/img5.jpg'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card() {
    return (
        <>
            <div className='d-flex flex-column align-items-center' id='mostLoved' style={{ marginTop: "8rem" }}>
                <span className='header-text'>QUALITY FEATURES</span>
                <h4 className='py-3 header-subtext'>Tutorials that people love most</h4>
                <div className='d-flex my-4 '>
                    <div class="card cutom-card">
                        <img src={img} class="card-img-top custom-card-img" alt="..." />
                        <div class="card-body">
                            <div className='d-flex gap-1'>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 bstar' icon={solidStar} /></span>
                                <span className='mx-2 my-1 rating'>5.0 (392 reviews)</span>
                            </div>
                            <p class="card-text">How to work with prototype design with adobe xd featuring tools</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_1_601)">
                                        <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_601">
                                            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='custom-text'>2,538 students watched</span>
                            </div>

                        </div>
                    </div>
                    <div class="card cutom-card mx-4">
                        <img src={img} class="card-img-top custom-card-img" alt="..." />
                        <div class="card-body">
                            <div className='d-flex gap-1'>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 bstar' icon={solidStar} /></span>
                                <span className='mx-2 my-1 rating'>5.0 (392 reviews)</span>
                            </div>
                            <p class="card-text">Create multiple artboard by using figma prototyping tools development</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_1_601)">
                                        <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_601">
                                            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='custom-text'>3,532 students watched</span>
                            </div>
                        </div>
                    </div>
                    <div class="card cutom-card">
                        <img src={img} class="card-img-top custom-card-img" alt="..." />
                        <div class="card-body">
                            <div className='d-flex gap-1'>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                <span > <FontAwesomeIcon className='py-2 bstar' icon={solidStar} /></span>
                                <span className='mx-2 my-1 rating'>5.0 (392 reviews)</span>
                            </div>
                            <p class="card-text">Convert your web layout theming easily with sketch zeplin extension</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_1_601)">
                                        <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_601">
                                            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='custom-text'>1,037 students watched</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
