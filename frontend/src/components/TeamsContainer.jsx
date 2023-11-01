import React, { useState } from 'react';
import classes from './TeamsContainer.module.css';
import { FaAngleDown } from 'react-icons/fa';
import {} from 'react-icons/';
import TeamUnit from './TeamUnit';
import {
	leadershipMembers,
	marketingMembers,
	creativeMembers,
	prMembers,
	techMembers,
	allMembers,
} from '../utils/userData';
const TeamsContainer = () => {
	const [team, setTeam] = useState('Leadership');
	const teamChangehandler = (event) => {
		setTeam(event.target.value);
	};

	const getMembersByTeam = () => {
		switch (team) {
			case 'Leadership':
				return leadershipMembers;
			case 'Marketing':
				return marketingMembers;
			case 'Creative':
				return creativeMembers;
			case 'PR':
				return prMembers;
			case 'Tech':
				return techMembers;
			case 'All':
				return allMembers;
			default:
				return [];
		}
	};

	const members = getMembersByTeam();

	return (
		<div className={classes.mainContainer}>
			<h2 className={classes.heading}>
				Meet the <span>team.</span>
			</h2>

			<nav className={classes.teamsNav}>
				<ul className={classes.teamsNav_container}>
					<li
						className={`${classes.navUnit} ${
							team === 'Leadership' ? classes.active : ''
						} `}
						onClick={() => setTeam('Leadership')}>
						Leadership
					</li>
					<li
						className={`${classes.navUnit} ${
							team === 'Marketing' ? classes.active : ''
						} `}
						onClick={() => setTeam('Marketing')}>
						Marketing
					</li>
					<li
						className={`${classes.navUnit} ${
							team === 'Creative' ? classes.active : ''
						} `}
						onClick={() => setTeam('Creative')}>
						Creative
					</li>
					<li
						className={`${classes.navUnit} ${
							team === 'PR' ? classes.active : ''
						} `}
						onClick={() => setTeam('PR')}>
						PR
					</li>
					<li
						className={`${classes.navUnit} ${
							team === 'Tech' ? classes.active : ''
						} `}
						onClick={() => setTeam('Tech')}>
						Tech
					</li>
					<li
						className={`${classes.navUnit} ${
							team === 'All' ? classes.active : ''
						} `}
						onClick={() => setTeam('All')}>
						All
					</li>
				</ul>
			</nav>
			<div className={classes.teamsnavigation}>
				<select
					className={classes.mobileNav}
					name='role'
					id='role'
					value={team}
					onChange={teamChangehandler}>
					<option value='Leadership'>Leadership</option>
					<option value='Marketing'>Marketing</option>
					<option value='Creative'>Creative</option>
					<option value='PR'>PR Team</option>
					<option value='Tech'>Tech</option>
					<option value='All'>All</option>
				</select>
				<span className={classes.dropdownArrow}>
					<FaAngleDown size={40} />
				</span>
			</div>
			<div className={classes.teamsContainer}>
				{members.map((user, i) => {
					return (
						<TeamUnit
							key={i}
							user={user}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TeamsContainer;
