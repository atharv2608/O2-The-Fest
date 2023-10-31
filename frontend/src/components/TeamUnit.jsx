import React from 'react';
import classes from './TeamUnit.module.css';
import image1 from '../images/teams/userDefaultImg1.webp';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const TeamUnit = () => {
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
				<p className={classes.name}>Rahul Nair</p>
				<p className={classes.role}>CL</p>
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
