import React from "react";
import './UserFrom.css'

const UserFrom = ({ children }) => {
    return (
        <section className="container-userfrom">
            <img src="" alt="" />
            <div>Username</div>
            <p>gender</p>
            <button>MALE</button>
            <button>FEMALE</button>
            <label for="">year of birth</label>
            <input type="date" />
            <label for="">Height</label>
            <input type="text" />
            <label for="">Weight</label>
            <input type="text" />
            <label for="">Goal</label>
            <input type="text" />
            <p>Exercise day</p>
            <input type="checkbox" name="m" />
            <label for="m">M</label>
            <input type="checkbox" name="tu" />
            <label for="tu">TU</label>
            <input type="checkbox" name="w" />
            <label for="w">W</label>
            <input type="checkbox" name="th" />
            <label for="th">TH</label>
            <input type="checkbox" name="f" />
            <label for="f">SA</label>
            <input type="checkbox" name="su" />
            <label for="su">SU</label>
            <p>start time</p>
            <p>*It takes about 30 minutes or more.</p>
            <input type="text" name="" id="" />
            <p>:</p>
            <input type="text" name="" id="" />
            <button>SAVE</button>
        </section>

    );
}

export default UserFrom;