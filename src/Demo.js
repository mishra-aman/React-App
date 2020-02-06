import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {
	return <div className="main-div_style">
			  <h1>Hello {name} </h1>
			  <p> Welcome to react </p>
			</div>

}


export default Demo;