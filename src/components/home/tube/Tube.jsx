import React from 'react'
import ReactPlayer from 'react-player/youtube'

  const Tube = (props) =>  {
    state = {
      url: null,
      pip: false,
      playing: true,
      controls: true,
      volume: 1,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }
  
    load = url => {
      this.setState({
        url,
        played: 0,
        loaded: 0,
        pip: false
      })
    }
  
    handlePlayPause = () => {
      this.setState({ playing: !this.state.playing })
    }
  
    handleStop = () => {
      this.setState({ url: null, playing: false })
    }
  
    handleToggleLoop = () => {
      this.setState({ loop: !this.state.loop })
    }
  
    handleVolumeChange = e => {
      this.setState({ volume: parseFloat(e.target.value) })
    }
  
    handleToggleMuted = () => {
      this.setState({ muted: !this.state.muted })
    }
  
    handleTogglePIP = () => {
      this.setState({ pip: !this.state.pip })
    }
  
    handlePlay = () => {
      console.log('onPlay')
      this.setState({ playing: true })
    }
  
    handleEnablePIP = () => {
      console.log('onEnablePIP')
      this.setState({ pip: true })
    }
  
    handleDisablePIP = () => {
      console.log('onDisablePIP')
      this.setState({ pip: false })
    }
  
    handlePause = () => {
      console.log('onPause')
      this.setState({ playing: false })
    }
  
    handleEnded = () => {
      console.log('onEnded')
      this.setState({ playing: this.state.loop })
    }
  
    handleDuration = (duration) => {
      console.log('onDuration', duration)
      this.setState({ duration })
    }
  
    renderLoadButton = (url, label) => {
      return (
        <button onClick={() => this.load(url)}>
          {label}
        </button>
      )
    }
  
    ref = player => {
      this.player = player
    }

      const { url, playing, light, volume, muted, loop, playbackRate, pip } = this.state

    return (
      <div className='app'>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls='true'
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
            />
          </div>

          <table>
            <tbody>
              <tr>
                <th>Controls</th>
                <td>
                  <button onClick={this.handleStop}>Stop</button>
                  <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                  <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                  <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>
                </td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='muted'>Muted</label>
                </th>
                <td>
                  <input id='muted' type='radio' checked={muted} onChange={this.handleToggleMuted} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='loop'>Loop</label>
                </th>
                <td>
                  <input id='loop' type='radio' checked={loop} onChange={this.handleToggleLoop} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='section'>
          <table>
            <tbody>

              <tr>
                <th>Custom URL</th>
                <td>
                  <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />
                  <button onClick={() => this.setState({ url: this.urlInput.value })}>Load</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )

}

export default Tube;