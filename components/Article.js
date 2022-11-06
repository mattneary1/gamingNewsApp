import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import moment from "moment";

const Article = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			{/* Image */}
			<Image
				source={{
					uri: props.urlToImage
				}}
				style={styles.image}
			/>
			<View style={{ padding: 20 }}>
				{/* Title */}
				<Text style={styles.title}>{props.title}</Text>
				{/* Description */}
				<Text style={styles.description} numberOfLines={3}>
					{props.description}
				</Text>
				{/* Source */}
				<View style={styles.data}>
					<Text style={styles.source}>{props.sourceName.toUpperCase()}</Text>
					<Text style={styles.date}>
						{moment(props.publishedAt).format("MMM Do YY")}
					</Text>
				</View>
				<View style={{ marginTop: 10 }}></View>
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
		height: 150,
		width: "100%",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
		marginTop: 10
	},
	description: {
		fontSize: 14,
		fontWeight: "400",
		marginTop: 15
	},
	data: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15
	},
	date: {
		fontWeight: "bold",
		color: "#040F16",
		fontSize: 14
	},
	source: {
		color: "#6564DB",
		fontWeight: "bold",
		fontSize: 14
	}
});
