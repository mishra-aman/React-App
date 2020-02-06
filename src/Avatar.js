import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './Avatarlist';


class Avatar extends Component {

	constructor(){
		super();
		this.state = {
			name : "Welcome to the Avatar World"
		}
	}

	namechange(){
		this.setState({
			name : "You're in the magical world of React"
		})
	}
	
	render() {
	const avatarlistarray = [
	   {

	   		id:1,
	   		name:"Aman",
	   		work:"Web Developer"
	   },

	   {

	   		id:2,
	   		name:"Rahul",
	   		work:"Back-End Developer"
	   },

	   {

	   		id:3,
	   		name:"Sanjay",
	   		work:"Android Developer"
	   },


	   {

	   		id:4,
	   		name:"Samuel",
	   		work:"iOS Developer"
	   }


	]

	const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
		return <AvatarList key={i} id={avatarlistarray[i].name} 
			                   name={avatarlistarray[i].name} 
							   work={avatarlistarray[i].work}/>	
	})						   
	return ( 
		<div className="mainpage">
			<h1> {this.state.name} </h1>
				  {arrayavatarcard}
			<button onClick={ () => this.namechange()}> Subscribe </button>
		</div>
            )

	}
	
}
	


export default Avatar;