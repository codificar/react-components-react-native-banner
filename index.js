import React, { Component } from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'
import axios from 'axios'
import Carousel from 'react-native-looped-carousel'

const { width, height } = Dimensions.get('window')


class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: this.props.position ? this.props.position : 'Top',
            route: this.props.route,
            banners: [],
            size: { width, height }
        }
    }


    componentDidMount() {
        let responseRequest = ''
        axios.get(this.props.route, {
            params: {
                id: this.props.providerId,
                token: this.props.providerToken,
                position: this.state.position
            }
        }).then(response => {
            if (response.data.success) {

                responseRequest = response.data
                this.props.returnRequest(responseRequest)

                const banners = response.data.banner
                this.setState({ banners })
            }
        }).catch(error => {
            responseRequest = error
            this.props.returnRequest(responseRequest)
        })
    }


    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout
        this.setState({ size: { width: layout.width, height: layout.height } })
    }


    renderBanner() {
        if (this.state.banners) {
            if (this.state.banners.length > 0) {
                const items = this.state.banners.map(banner => ({
                    uri: banner.imagem,
                }))
                return (
                    <View style={styles.contCarrousel} onLayout={this._onLayoutDidChange}>
                        <Carousel
                            delay={30000}
                            style={this.state.size}
                            autoplay
                            onAnimateNextPage={(p) => console.log(p)}
                        >
                            {items.map(image => (
                                <Image
                                    key={image}
                                    style={[this.state.size, { height: 100 }]}
                                    source={image}
                                    //resizeMode='contain'
                                />
                            ))}
                        </Carousel>
                    </View>
                )
            }
        }
    }


    render() {
        return (
            <View>
                {this.renderBanner()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    contCarrousel: {
        //flex: 1
    }
})

export default Banner