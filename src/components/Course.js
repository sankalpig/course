import React from 'react'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Course() {
    return (
        <>
            <div className='my-5 container' id='course'>
                <div className='container d-flex flex-column align-items-center w-75 pt-5 my-5'>
                    <span className='header-text'>Quality features</span>
                    <h4 className='py-3 core-subtext'>Popular Designing Course</h4>
                </div>

                <div className='container' style={{ width: "59rem" }}>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-1'>
                                                <svg className='play' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                                    <path d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z" fill="#EF9E48" />
                                                </svg>
                                            </div>
                                            <div className='col-10 ' style={{ margin: "0px 16px" }}>
                                                <div className='d-flex gap-1'>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 bstar' icon={solidStar} /></span>
                                                    <span className='mx-2 my-1 rating'>5.0 (392 reviews)</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ marginTop: "6px" }} fill="none">
                                                        <g clip-path="url(#clip0_1_601)">
                                                            <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_601">
                                                                <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span className='custom-text pt-1'>3,532 students watched</span>
                                                </div>
                                                <h6>Professional graphic design tutorial full course with exercise file</h6>
                                                <p className='function-text'>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                            </div>
                                            <div className='col-1 d-flex' style={{ alignItems: "center", margin: "0px -124px" }}>
                                                <div className='green-btn-cnt'>
                                                    <button className='green-button'>7 video classes</button>
                                                    <button className='green-button2'>4 hrs</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body container" style={{ width: "58rem" }}>
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-1'>
                                                <svg className='play' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                                    <path d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z" fill="#EF9E48" />
                                                </svg>
                                            </div>
                                            <div className='col-10 ' style={{ margin: "0px 16px" }}>
                                                <div className='d-flex gap-1'>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 bstar' icon={solidStar} /></span>
                                                    <span className='mx-2 my-1 rating'>5.0 (392 reviews)</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ marginTop: "6px" }} fill="none">
                                                        <g clip-path="url(#clip0_1_601)">
                                                            <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_601">
                                                                <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span className='custom-text pt-1'>3,532 students watched</span>
                                                </div>
                                                <h6>Professional graphic design tutorial full course with exercise file</h6>
                                                <p className='function-text'>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                            </div>
                                            <div className='col-1 d-flex' style={{ alignItems: "center", margin: "0px -124px" }}>
                                                <div className='green-btn-cnt'>
                                                    <button className='green-button'>7 video classes</button>
                                                    <button className='green-button2'>4 hrs</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-1'>
                                                <svg className='play' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                                    <path d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z" fill="#EF9E48" />
                                                </svg>
                                            </div>
                                            <div className='col-10 ' style={{ margin: "0px 16px" }}>
                                                <div className='d-flex gap-1'>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 cstar' icon={solidStar} /></span>
                                                    <span > <FontAwesomeIcon className='py-2 bstar' icon={solidStar} /></span>
                                                    <span className='mx-2 my-1 rating'>5.0 (392 reviews)</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ marginTop: "6px" }} fill="none">
                                                        <g clip-path="url(#clip0_1_601)">
                                                            <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_601">
                                                                <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span className='custom-text pt-1'>3,532 students watched</span>
                                                </div>
                                                <h6>Professional graphic design tutorial full course with exercise file</h6>
                                                <p className='function-text'>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
                                            </div>
                                            <div className='col-1 d-flex' style={{ alignItems: "center", margin: "0px -124px" }}>
                                                <div className='green-btn-cnt'>
                                                    <button className='green-button'>7 video classes</button>
                                                    <button className='green-button2'>4 hrs</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                        <div className='col'>
                                            <p className='d-flex'><svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                            </svg> <span className='function-text ms-2' >Ultimate access to all course, exercises and assessments</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
