import React, { Component, ReactNode } from 'react'
import { Button, Header, Modal as SemanticModal } from 'semantic-ui-react'
import isFunction from 'lodash/isFunction'

import { IModalConfig, IUpdateData } from '@store/modal/model'

export interface IStateProps {
  isOpen: boolean,
  config: IModalConfig,
}

export interface IDispatchProps {
  closeModal: () => void,
}

type IProps = IStateProps & IDispatchProps

interface IState {
  data: any,
  content: ReactNode,
}

class Modal extends Component<IProps, IState> {
  state = {
    data: undefined,
    content: undefined,
  }

  handleOpen = () => {
    const { config } = this.props

    let content: ReactNode
    if (isFunction(config.content)) {
      content = config.content(this.updateData)
    } else {
      content = config.content
    }

    this.setState({ content })
  }

  handleClose = () => {
    const { closeModal } = this.props
    closeModal()
    this.setState({ data: undefined })
  }

  updateData: IUpdateData<any> = (data) => {
    this.setState(
      ({ data: prevData }: IState) => ({
        data: {
          ...prevData,
          ...data,
        },
      }),
    )
  }

  isActionButtonDisabled = () => {
    const { config } = this.props
    const { data } = this.state

    if (isFunction(config.action.disabled)) {
      if (data === undefined) {
        return false
      }
      return config.action.disabled(data)
    }
    return config.action.disabled
  }

  render() {
    const { isOpen, config, closeModal } = this.props
    const { data, content } = this.state
    return (
      <SemanticModal
        dimmer="blurring"
        size="tiny"
        closeOnDimmerClick
        open={isOpen}
        onMount={this.handleOpen}
        onClose={this.handleClose}
        >
          <SemanticModal.Header>
            <Header icon={config.header.icon} content={config.header.label} />
          </SemanticModal.Header>
          <SemanticModal.Content content={content} />
          <SemanticModal.Actions>
            <Button
              content="Cancel"
              onClick={closeModal}
            />
            <Button
              primary
              disabled={this.isActionButtonDisabled()}
              content={config.action.label}
              onClick={() => {
                config.action.callback(data)
                closeModal()
              }}
            />
          </SemanticModal.Actions>
        </SemanticModal>
    )
  }
}

export default Modal
