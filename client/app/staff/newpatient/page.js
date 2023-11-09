import React from 'react'

const page = () => {
    return (
        <div>
            <h1>New Patient Registration</h1>
            <div>
                <form >
                    <div>
                        <label>Patient Name </label>
                        <input type='text' id="name"></input>
                    </div>
                    <div>
                        <label>Address </label>
                        <input type='text' id="address"></input>
                    </div>
                    <div>
                        <label>Patient Email </label>
                        <input type='email' id="email"></input>
                    </div>
                    <div>
                        <label>Patient Phone Number </label>
                        <input type='number' id="phone"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page