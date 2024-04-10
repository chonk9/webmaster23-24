import React from "react";
import WindAnimation from "../Components/windAnimation.js";
import SunAnimation from "../Components/sunAnimation.js";
import CarAnimation from "../Components/carAnimation.js";
import TextWrap from "../Components/textWrap.js";
import SolutionHeading from "../Components/solutionHeading.js";
import Cost from '../Components/cost.js';
import fuelEff from "../Images/fuel-efficiency.jpg"
import electricVehicle from "../Images/electric-vehicle.jpg";
import steeringWheelIcon from "../Images/carSteeringWheel.png";

function steeringWheelIconComponent() {
    return <img src={steeringWheelIcon} style={{ width: "60px" }} />;
}

export default function CleanSolutionsVehicles() {
    return (
        <>
            <h1>Clean Solutions for Vehicles</h1>
            <div className="content">
                <div>
                    <div className="solution">
                        <SolutionHeading
                            visual={CarAnimation}
                            solutionName="Electric Vehicles"
                            cost={<Cost value="30,000+"></Cost>}
                        />
                        <TextWrap
                            wrappedSide="Right"
                            wrappedElt={
                                <>
                                    <img src={electricVehicle}></img>
                                </>
                            }
                            textElt={
                                <>
                                    <p>
                                        <b>Electric Vehicles or 'EVs'</b> use
                                        electricity as a power source. This can
                                        be done with solar panels, by converting
                                        fuel into energy with fuel cells or
                                        generators, or with a charged battery.
                                    </p>
                                    <p>
                                        The advantage with EVs is that they can
                                        get energy from a variety of sources
                                        instead of just fossil fuels like with
                                        traditional vehicles. In addition, EVs
                                        can also gain energy back by recovering
                                        energy from breaking.
                                    </p>
                                    <p>
                                        Depending on when you bought your EV, 
                                        what type of car you bought, and your income,
                                        you can receive thousands of dollars of tax credit back.
                                        The IRS has a resource  <a href="https://www.dsireusa.org/" target="_blank" rel="noopener noreferrer"><b>here</b></a> for more detailed information.
                                    </p>
                                </>
                            }
                        />
                    </div>

                    <div className="solution">
                        <SolutionHeading
                            visual={steeringWheelIconComponent}
                            solutionName="Fuel Conservation"
                            cost={<Cost value="0 &#8212; You save money on fuel!"></Cost>}
                        />
                        <TextWrap
                            wrappedSide="Left"
                            wrappedElt={
                                <>
                                    <img src={fuelEff}></img>
                                </>
                            }
                            textElt={
                                <>
                                    <p>
                                        Even if you can't switch to an EV, there are still plenty of ways to be more enviromentally friendly.
                                        You can use less fuel by driving less or driving more efficiently.
                                        Walking and biking more, carpooling with other people, public transportation, 
                                        and efficient planning can cut down on driving time.
                                        
                                    </p>
                                    <p>
                                        Acceleration and deacceleration costs more fuel than driving at a constant speed. 
                                        By accelerating slower and less often a lot of fuel can be saved.
                                        In addition, poor car maintenance lessens fuel efficiency, so getting your car checked up will save you fuel in the long run.
                                        Also, leaving your car on idle uses gas. If you idle your car a lot, the gas usage will add up. Try idling your car less often.
                                    </p>
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
