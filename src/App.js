import React from "react"
import BadgeCard from "./BadgeCard"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isDisabled: true,
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            description: "",
            badge: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.validateSubmit = this.validateSubmit.bind(this)
        

    }
    validateSubmit() {
        if (this.state.firstName === "" ||
            this.state.lastName === "" ||
            this.state.email === "" ||
            this.state.placeOfBirth === "" ||
            this.state.phone === "" ||
            this.state.favoriteFood === "" ||
            this.state.description === "") {
            this.setState({ isDisabled: true })
        }else{
            this.setState({isDisabled:false})
        }
    }
    

    handleChange(event) {
        this.validateSubmit()
        const { name, value } = event.target
        this.setState({ [name]: value })

    }
    handleClick(event) {
        const badgeInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            descripton: this.state.description,
        }
        this.state.badge.push(badgeInfo)
        console.log(this.state.badge.map(thing => thing));
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            description: "",
        })
        event.preventDefault()
    }
    render() {


        return (
            <div className="formContainer">
                <form id="form">
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                    <input type="text" name="placeOfBirth" value={this.state.placeOfBirth} placeholder="Place of Birth" onChange={this.handleChange} /><br />
                    <input type="number" inputMode="numeric" name="phone" value={this.state.phone} placeholder="Phone Number" onChange={this.handleChange}  />
                    <input type="text" name="favoriteFood" value={this.state.favoriteFood} placeholder="Favorite Food" onChange={this.handleChange} /><br />
                    <textarea name="description" className="description" value={this.state.description} onChange={this.handleChange} /> <br />
                    <button className="btn" disabled={this.state.isDisabled} onClick={this.handleClick} >Submit</button>
                </form>
                <div>
                    {this.state.badge.map(i => <BadgeCard key={i.firstName} firstName={i.firstName} lastName={i.lastName} email={i.email} placeOfBirth={i.placeOfBirth} phone={i.phone} favoriteFood={i.favoriteFood} description={i.descripton} />)}
                </div>

            </div>
        )
    }
}

export default App