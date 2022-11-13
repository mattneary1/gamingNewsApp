import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

const Article = (props) => {
	const goToSource = () => {
		WebBrowser.openBrowserAsync(props.url);
	};

	return (
		<Pressable style={styles.container} onPress={goToSource}>
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
		</Pressable>
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
		fontSize: 12,
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
		fontSize: 10
	},
	source: {
		color: "#6564DB",
		fontWeight: "bold",
		fontSize: 10
	}
});
