import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { StatusBar } from 'expo-status-bar';
import SignIn from './SignIn';
import SignOut from './SignOut';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,

		backgroundColor: '#e1e4e8',
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			{/* <Text>Rate Repository Application</Text> */}
			<StatusBar style='light' />
			<AppBar />
			<Switch>
				<Route path='/' exact>
					<RepositoryList />
				</Route>
				<Route path='/signIn' exact>
					<SignIn />
				</Route>
				<Route path='/signOut' exact>
					<SignOut />
				</Route>
				<Redirect to='/' />
			</Switch>
		</View>
	);
};

export default Main;
