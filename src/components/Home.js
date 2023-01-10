import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import './Home.css';

const Home = () => {

    const [today, setToday] = useState('')
    const days = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5", "Day-6", "Day-7", "Day-8", "Day-9", "Day-10"];

    const Navigate = useNavigate()

    const DaysImage = ({ src, alt, className }) => {
        return (
            < img src={src} alt={alt} className={className} />
        )
    }

    return (
        <div className='Home'>
            <div className='home-bg-1'>
                <div>
                    <img src='/img/jerusalem-dome-banner.jpg' alt='jerusalem-dome-banner' className='top-banner' />
                </div>
                <Container>
                    <div className='features'>
                        <div className='features-item-1'>
                            <img src='/img/gardentomb-israel.jpg' alt='gardentomb-israel' className='features-item-1-img' />
                            <h1>Welcome to Israel!!</h1>
                            <p>The City of Jesus</p>
                        </div>
                        <div className='features-item-2'>
                            <img src='/img/sinai-israel.jpg' alt='gardentomb-israel' className='features-item-1-img' />
                        </div>
                        <div className='features-item-3'>
                            <img src='/img/pyramid-israel.jpg' alt='gardentomb-israel' className='features-item-1-img' />
                        </div>
                        <div className='features-item-4'>
                            <img src='/img/galille-israel.jpg' alt='gardentomb-israel' className='features-item-1-img' />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='home-bg-2'>
                <Container>
                    <div className='package-container'>
                        <h5 className='package-heading'>Countries: Jordan, Egypt, Israel</h5>
                        <p className='package-paragraph-1'>Tour Package ✈ Air Conditioned Transport ✈ Accommodation Included ✈ Expert Tour Guide ✈ 13 Day Package ✈ English</p>
                        <p className='package-paragraph-2'>From 1800$ /person<br></br><br></br>
                            <Button onClick={() => Navigate('/loginsignin')} className='btn-booknow'>Book Now</Button>
                        </p></div>
                </Container>
            </div >
            <div className='home-bg-3'>
                <Container>
                    <div className='info-container'>
                        <div><img src='/img/dome-israel.jpg' alt='dome-israel' className='info-img' /></div>
                        <div className='info-content'></div>
                    </div>
                </Container>
            </div>
            
            <div className='plan'>
                <img src='/img/plan-bg.jpg' alt='plan-bg' className='plan-bg' />
                <Container>
                    <div className='days-btn-container'>
                        {days.map(day => (
                            <button
                                type='button'
                                key={day}
                                className='days-btn'
                                onClick={() => setToday(day)}>
                                {day}
                            </button>
                        ))}
                    </div>
                    <div className='days-container'>

                        {today === 'Day-1' && (
                            <>
                                <div className='days-img'>
                                    <DaysImage src={"/img/day-1-israel.jpg"} alt={"day-1-israel"} className={"day-img"} />
                                </div>
                                <div className='days-content'>
                                    <h1 className='days-content-heading'>dummy</h1>
                                    <ul className='days-content-para'>
                                        <li>Upon your arrival at Ben Gurion International Airport, you will be greeted by our representative and will be assisted to the hotel for your Israel tour package from India.</li>
                                        <li>As you reach, check-in at the hotel and unwind, you have the remaining day at leisure.</li>
                                        <li>In the evening, you can go out to explore nearby places and local markets.</li>
                                        <li>Head back to the hotel for dinner and an overnight stay.</li>
                                    </ul>
                                </div>
                                <div className='days-content-heading-position'>Day -1 Amman - Mount Nebo</div>
                            </>
                        )}
                        {today === 'Day-2' && (
                            <>
                                <div className='days-img'>
                                    <DaysImage src={"/img/day-2-israel.jpg"} alt={"day-2-israel"} className={"day-img"} />
                                </div>
                                <div className='days-content'>
                                    <h1 className='days-content-heading'>dummy</h1>
                                    <ul className='days-content-para'>
                                        <li>After having breakfast, set out for a sightseeing tour of Jerusalem's new city.</li>
                                        <li>The first stop as per your Israel tour package from India is Mount of Olives, named for the olives groves that once shielded the mountain slopes.

                                        </li>
                                        <li>Our next stop is the Garden of Gethsemane, located at the foot of Mount of olives, this garden is known to hold significant importance in Christianity. The Church of Agony is the place where Jesus was crucified.

                                        </li>
                                        <li>After the tour, head back to the hotel for dinner and an overnight stay.</li>
                                    </ul>
                                </div>
                                <div className='days-content-heading-position'>DAY - 2 NEW CITY TOUR OF JERUSALEM</div>
                            </>
                        )}
                        {today === 'Day-3' && (
                            <>
                            <div className='days-img'>
                                <DaysImage src={"/img/day-3-israel.jpg"} alt={"day-2-israel"} className={"day-img"} />
                            </div>
                            <div className='days-content'>
                                <h1 className='days-content-heading'>dummy</h1>
                                <ul className='days-content-para'>
                                    <li>After having breakfast, set out for a sightseeing tour of Jerusalem's new city.</li>
                                    <li>The first stop as per your Israel tour package from India is Mount of Olives, named for the olives groves that once shielded the mountain slopes.

                                    </li>
                                    <li>Our next stop is the Garden of Gethsemane, located at the foot of Mount of olives, this garden is known to hold significant importance in Christianity. The Church of Agony is the place where Jesus was crucified.

                                    </li>
                                    <li>After the tour, head back to the hotel for dinner and an overnight stay.</li>
                                </ul>
                            </div>
                            <div className='days-content-heading-position'>DAY - 3 NEW CITY TOUR OF JERUSALEM</div>
                        </>
                        )}

                    </div>
                </Container>
            </div>
            <Footer />
        </div >
    )
}

export default Home;