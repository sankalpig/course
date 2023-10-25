import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
    return (
        <div>
            <div className='container py-5' id='contact' style={{ width: "45rem", marginTop: "10rem", borderTop: "1px solid #E5ECF4" }} >
                <div className='row'>
                    <div className='col d-flex flex-column'>
                        <h6 className='card-text'>About Us</h6>
                        <div className='my-4 ' style={{ listStyle: "none" }}>
                            <li><li> <Link className='function-text custom-footer  custom-footer'>Support Center </Link></li></li>
                            <li> <li> <Link className='function-text custom-footer  custom-footer'>Customer Center </Link></li></li>
                            <li> <Link className='function-text custom-footer '>About Us </Link></li>
                            <li> <Link className='function-text custom-footer '>Copyright </Link></li>
                            <li> <Link className='function-text custom-footer '>Popular Campaign </Link></li>
                        </div>

                    </div>
                    <div className='col'>
                        <h6 className='card-text'>Our Information</h6>
                        <div className='my-4' style={{ listStyle: "none" }}>
                            <li> <Link className='function-text custom-footer '>Return Policy </Link></li>
                            <li> <Link className='function-text custom-footer '>Privacy Policy </Link></li>
                            <li> <Link className='function-text custom-footer '>Terms & Conditions </Link></li>
                            <li> <Link className='function-text custom-footer '>Site Map  </Link></li>
                            <li> <Link className='function-text custom-footer '>Store Hours </Link></li>
                        </div>
                    </div>

                    <div className='col'>
                        <h6 className='card-text'>My Account</h6>
                        <div className='my-4' style={{ listStyle: "none" }}>
                            <li> <Link className='function-text custom-footer '>Press inquiries </Link></li>
                            <li> <Link className='function-text custom-footer '> Social media </Link></li>
                            <li> <Link className='function-text custom-footer '>directories </Link></li>
                            <li> <Link className='function-text custom-footer '>Images & B-roll  </Link></li>
                            <li> <Link className='function-text custom-footer '>Permissions </Link></li>
                        </div>
                    </div>
                    <div className='col'>
                        <h6 className='card-text'>Policy</h6>
                        <div className='my-4' style={{ listStyle: "none" }}>
                            <li> <Link className='function-text custom-footer '>Appliction security </Link></li>
                            <li> <Link className='function-text custom-footer '>Software principles </Link></li>
                            <li> <Link className='function-text custom-footer '>Unwanted software policy </Link></li>
                            <li> <Link className='function-text custom-footer '>Responsible supply chain </Link></li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
