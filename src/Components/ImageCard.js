import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.imageRef)
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const imgheight = this.imageRef.current.clientHeight
        const spans = Math.ceil(imgheight / 10)
        this.setState({ spans })
    }
    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img key={description} ref={this.imageRef} src={urls.regular} alt={description} />

            </div>
        )
    }
}

export default ImageCard