import React from 'react';
import classes from './TeamsContainer.module.css';
import { FaAngleDown } from 'react-icons/fa';
import TeamUnit from './TeamUnit';
const TeamsContainer = () => {
	return (
		<div className={classes.mainContainer}>
			<h2 className={classes.heading}>
				Meet the <span>team.</span>
			</h2>

			<nav className={classes.teamsNav}>
				<ul className={classes.teamsNav_container}>
					<li>Leadership</li>
					<li>Marketing</li>
					<li>Creative</li>
					<li>PR Team</li>
					<li>Tech</li>
					<li>All</li>
				</ul>
			</nav>
			<div className={classes.teamsnavigation}>
				<select
					className={classes.mobileNav}
					name='role'
					id='role'>
					<option value='Leadership'>Leadership</option>
					<option value='Marketing'>Marketing</option>
					<option value='Creative'>Creative</option>
					<option value='PR_team'>PR Team</option>
					<option value='Tech'>Tech</option>
					<option value='all'>All</option>
				</select>
				<span className={classes.dropdownArrow}>
					<FaAngleDown size={40} />
				</span>
			</div>
			<div className={classes.teamsContainer}>
				<TeamUnit />
				<TeamUnit />
				<TeamUnit />
				<TeamUnit />
			</div>
		</div>
	);
};

export default TeamsContainer;
