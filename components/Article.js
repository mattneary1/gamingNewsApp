import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";

const Article = () => {
	return (
		<SafeAreaView style={styles.container}>
			{/* Image */}
			<Image
				source={{
					uri: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				}}
				style={styles.image}
			/>
			<View style={{ padding: 20 }}>
				{/* Title */}
				<Text style={styles.title}>Gaming News App using React Native</Text>
				{/* Description */}
				<Text style={styles.description}>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecati cupiditate non provident.
				</Text>
				<View style={styles.data}>
					<Text style={styles.heading}>
						By: <Text style={styles.author}>Matt Neary</Text>
					</Text>
					<Text style={styles.date}>Nov. 6th, 2022</Text>
				</View>
				{/* Source */}
				<View style={{ marginTop: 10 }}>
					<Text>
						source: <Text style={styles.source}>Matt Neary</Text>
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Article;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		borderRadius: 40,
		shadowOpacity: 0.5,
		shadowColor: "#000",
		shadowOffset: {
			height: 5,
			width: 5
		},
		backgroundColor: "#fff",
		marginTop: 20
	},
	image: {
		height: 200,
		width: "100%",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		marginTop: 10
	},
	description: {
		fontSize: 16,
		fontWeight: "400",
		marginTop: 10
	},
	data: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10
	},
	heading: {},
	author: {
		fontWeight: "bold"
	},
	date: {
		fontWeight: "bold",
		color: "#fb5012",
		fontSize: 16
	},
	source: {
		color: "#fb5012",
		fontWeight: "bold",
		fontSize: 16
	}
});
