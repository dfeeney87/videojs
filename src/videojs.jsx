import React, { Component } from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import './App.css';
import changeVid from './media/small.mp4';

var Button = videojs.getComponent('Button');
var MyButton = videojs.extend(Button, {
constructor: function() {
    console.log(this, 'buttonload')
    Button.apply(this, arguments);
    this.addClass( 'vjs-icon-hd' );
    console.log(this, 'buttonloaded')
    /* initialize your button */
},
handleClick: function() {
    let player = this.player()
    // if(player.paused()) {
    //     return player.play()
    // }
    // return player.pause()
    player.src({src: changeVid, type: 'video/mp4'})
}
});

export default class VideoJS extends Component {
    componentDidMount() {
        videojs.registerComponent('MyButton', MyButton);
        this.player = videojs(this.videonode, this.props, ()=>{console.log('onPlayerReady', this)})
        this.player.getChild('controlBar').addChild('myButton', {});
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div data-vjs-player>
                <video width="640px" height="360px" ref={ node => { this.videonode = node }} className="video-js"/>
            </div>
        )
    }
}