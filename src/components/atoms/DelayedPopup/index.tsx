import React, { Component, MouseEvent } from 'react'
import { Popup, PopupProps } from 'semantic-ui-react'

interface IProps extends PopupProps {
  delay?: number,
}

interface IState {
  isOpen: boolean,
}

class DelayedTooltip extends Component<IProps, IState> {
  static defaultProps = {
    delay: 500,
  }

  timerId: number | undefined
  state: IState = {
    isOpen: false,
  }

  componentWillUnmount() {
    this.onClose()
  }

  onClose = () => {
    clearTimeout(this.timerId)
    this.timerId = undefined
    this.setState({ isOpen: false })
  }

  onOpen = (event: MouseEvent<HTMLElement>) => {
    const clickedOpen = (event as any).dispatchConfig.isInteractive
    if (clickedOpen) {
      this.onClose()
      return
    }

    const { delay } = this.props
    if (!this.timerId) {
      this.timerId = setTimeout(
        () => {
          this.setState({ isOpen: true })
          this.timerId = undefined
        },
        delay,
      )
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <Popup
        {...this.props}
        onOpen={this.onOpen}
        onClose={this.onClose}
        open={isOpen}
      />
    )
  }
}

export default DelayedTooltip
