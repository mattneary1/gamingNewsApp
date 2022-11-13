import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Article from "../components/Article";
import axios from "axios";

const HomeScreen = () => {
	const [articles, setArticles] = useState([]);
	const getNews = () => {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=9ed1a94e525245db844f1bc43a8fde29"
			)
			.then((response) => {
				// handle success
				console.log(response.data.articles);
				setArticles(response.data.articles);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={articles}
				renderItem={({ item }) => (
					<Article
						urlToImage={item.urlToImage}
						title={item.title}
						description={item.description}
						publishedAt={item.publishedAt}
						sourceName={item.source.name}
						url={item.url}
					/>
				)}
				keyExtractor={(item) => item.title}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#d7d7d7"
	}
});
