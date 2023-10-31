import React from 'react';
import classes from './TeamUnit.module.css';
import image1 from '../images/teams/userDefaultImg1.webp';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const TeamUnit = (props) => {
	return (
		<div className={classes.unitContainer}>
			<div className={classes.imageContainer}>
				<img
					className={classes.userProfileImg}
					src={image1}
					alt='user1'
				/>
			</div>
			<div className={classes.userDetails}>
				<div className={classes.name}>
					<p className={classes.firstname}>{props.user.firstName}</p>
					<p className={classes.lastname}>{props.user.lastName}</p>
				</div>

				<p className={classes.role}>{props.user.role}</p>
			</div>
			<div className={classes.socialHandles}>
				<p className={classes.insta}>
					<BsInstagram className={classes.socialIcon} />
				</p>
				<p className={classes.linkedIn}>
					<BsLinkedin className={classes.socialIcon} />
				</p>
			</div>
		</div>
	);
};

export default TeamUnit;
