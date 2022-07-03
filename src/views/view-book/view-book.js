import React, { useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, Share, Pressable } from 'react-native'
import { useState } from 'react'
import safeView from '../../styles/safe-view'
import styles from './view-book-style'
import DefaultBar from '../../components/default-bar-back'
import shareButton from '../../../assets/icons/share.png'
import horizontal from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profile.png'
import image_mocked from '../../../assets/icons/image.png'
import like from '../../../assets/icons/like.png'
import comments from '../../../assets/icons/chat.png'
import editButton from '../../../assets/buttons/editButton.png'
import spinner from '../../styles/spinner'
import Rate from '../../components/rate-stars'
import useGetBook from './useBook'


const ViewBook = ({ navigation, route }) => {
	const [show, setShow] = useState(false)

	const [book, setBook] = useState({
		book: {},
		loading: true,
	})

	const [userOption, setUserOption] = useState(null);

	const onShare = async () => {
		const share = await Share.share({
			message: "passar a url aqui"
		})
	}

	useEffect(() => {
		useGetBook({ id: route.params?.id, setBook })
	}, [])

	if (book.loading) {
		return (
			<View style={[spinner.container, spinner.horizontal]}>
				<ActivityIndicator size="large" color="#00000" />
			</View>
		)
	}

	return (

		<SafeAreaView style={safeView.AndroidSafeArea}>
			<ScrollView>
				<View style={styles.standart}>
					<DefaultBar navigation={navigation} />

					<View style={styles.segment}>
						<Text style={styles.gender_title}>
							Gênero: {book.book.genre.name}
						</Text>
						<View style={styles.share_segment}>
							<TouchableOpacity onPress={onShare}>
								<Image source={shareButton} style={styles.shareButton} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.book_segment}>
						<Text style={styles.book_title}>
							{book.book.book_title}
						</Text>
						<Text style={styles.book_autor}>
							{book.book.author[0].name}
						</Text>

						<View >
							<TouchableOpacity onPress={() => navigation.navigate('Review')}>
								<View style={styles.star_container}>
									<Rate stars={book.book.rate} style={styles.star} />
								</View>
							</TouchableOpacity>
						</View>

						<Text style={styles.star_number}>
							({book.book.rates.length})
						</Text>
						<Image source={{ uri: book.book.cover }} style={styles.bookImage} />
					</View>

					<View >
						<Text style={styles.resume}>
							{book.book.description}
						</Text>
						<View style={styles.want_to_read_container}>
							<TouchableOpacity
								onPress={() => { setShow(!show) }}>
								<Text style={styles.want_to_read}> Adicionar na Biblioteca </Text>
							</TouchableOpacity>
							{
								show ? (
									book.book.book_status.map((item) => {
										return (
											<TouchableOpacity
												key={item.id}
												style={item.value === userOption ? styles.selected : styles.unselected}
												onPress={() => setUserOption(item.id)}>
												<Text key={item.id}>{item.status}</Text>
											</TouchableOpacity>
										)
									})

								) : null
							}
						</View>
						<TouchableOpacity onPress={() => navigation.navigate('Review')}>
							<View style={styles.star_container}>
								<Rate stars={book.book.rate} style={styles.star} />
							</View>
						</TouchableOpacity>
						<View style={styles.star_container_resume}>
							<TouchableOpacity onPress={() => navigation.navigate('Review')}>
								<Text style={styles.star_number_resume}>
									(Avaliar)
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.line}>
							<Image source={horizontal} style={styles.horizontalLine} />
						</View>
					</View>

					<View>
						<Text style={styles.title}>
							Procurando Companhia?
						</Text>
						<View style={styles.company}>
							<TouchableOpacity onPress={() => navigation.navigate('SearchReaders')}>
								<Image source={profile} style={styles.person_image} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.navigate('SearchReaders')}>
								<Text style={styles.company_title}>
									Pessoas ({book.book.peoples})
								</Text>
							</TouchableOpacity>
						</View>
						<Text></Text>
						<View style={styles.line}>
							<Image source={horizontal} style={styles.horizontalLine} />
						</View>
					</View>

					<View>
						<Text style={styles.comments_title}> {book.book.rates.length} avaliações </Text>

					</View>

					<View style={styles.edit_segment}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Review')}>
							<Image source={editButton} style={styles.editButton} />
						</TouchableOpacity>
					</View>

					{

						book.book.rates.map((item, key) => {
							return (
								<>
									<View style={styles.comment_title}>
										<TouchableOpacity
											onPress={() => navigation.navigate('People')}>
											<Image source={{ uri: item.user.photo }} style={styles.user_image} />
										</TouchableOpacity>

										<TouchableOpacity
											onPress={() => navigation.navigate('People')}>
											<Text style={styles.person}>{item.user.nickname}</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() => navigation.navigate('Review')}>
											<View style={styles.star_container_comments}>
												<Rate stars={item.rate} style={styles.star_comments} />
											</View>
										</TouchableOpacity>
									</View>

									<View style={styles.book_description_container}>
										<TouchableOpacity
											onPress={() => navigation.navigate('Comments')}
										>
											<Text style={styles.book_description}>{item.text}</Text>
										</TouchableOpacity>
									</View>

									<View style={styles.footer}>
										<Text style={styles.date}>{item.date.slice(0, 10)}</Text>
										<View style={styles.like_and_comments}>
											<TouchableOpacity style={styles.buttons}>
												<Image source={like} style={styles.icons} />
												<Text style={styles.icon_text}>{item.likes}</Text>
											</TouchableOpacity>
											<TouchableOpacity style={styles.buttons}
												onPress={() => navigation.navigate('Comments')}>
												<Image source={comments} style={styles.icons} />
												<Text style={styles.icon_text}> {item.comments} </Text>
											</TouchableOpacity>
										</View>
									</View>
									<View style={styles.line}>
										<Image source={horizontal} style={styles.horizontalLine} />
									</View>
								</>
							)
						}
						)
					}

				</View>
			</ScrollView>
		</SafeAreaView >
	)
}


export default ViewBook