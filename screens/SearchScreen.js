import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Article from "../components/Article";

const SearchScreen = () => {
	const [searchText, setSearchText] = useState("");
	const [articles, setArticles] = useState([]);

	const searchArticles = () => {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=9ed1a94e525245db844f1bc43a8fde29",
				{
					params: {
						q: searchText
					}
				}
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

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar
				searchText={searchText}
				setSearchText={setSearchText}
				onSubmit={searchArticles}
			/>
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

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#d7d7d7"
	}
});
