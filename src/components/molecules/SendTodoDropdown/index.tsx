import React, { Component } from 'react'
import { Dropdown, Loader, Dimmer } from 'semantic-ui-react'
import styled from 'styled-components'

import DelayedPopup from '@components/atoms/DelayedPopup'
import { IFriends } from '@store/friends/model'
import { IModalConfig } from '@store/Modal/model'
import sendTodoModal from '@modals/sendTodo'

const PaddedMenu = styled(Dropdown.Menu)`
  padding-bottom: 10px !important;
`

const PaddedDropdownItem = styled(Dropdown.Item)`
  margin-top: 20px;
  margin-bottom: 20px;
`

export interface IStateProps {
  loadingFriends: boolean,
  friends: IFriends,
}

export interface IDispatchProps {
  openModal: (data: IModalConfig) => void,
  sendTodo: (recipientId: string) => void,
}

interface IState {
  isOpen: boolean,
  recipientId: string,
  recipientName: string,
}

export type IProps = IStateProps & IDispatchProps

class SendTodoDropdown extends Component<IProps, IState> {
  state = {
    isOpen: false,
    recipientId: '',
    recipientName: '',
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { loadingFriends, friends, sendTodo, openModal } = this.props
    const { isOpen } = this.state
    return (
      <DelayedPopup
        content="Send"
        on={!isOpen ? ['hover', 'click'] : []}
        trigger={
          <Dropdown
            icon="send"
            className="icon blue"
            text=" "
            button
            closeOnChange
            onOpen={this.handleOpen}
            onClose={this.handleClose}
          >
            <PaddedMenu>
              <Dropdown.Header icon="group" content="Friends"/>
              <Dropdown.Divider />
              {loadingFriends &&
                <PaddedDropdownItem>
                  <Dimmer active inverted>
                    <Loader />
                  </Dimmer>
                </PaddedDropdownItem>
              }
              {!loadingFriends && friends.length > 0 &&
                friends.map(({ _id, name: { full }, profileImage }) => (
                  <Dropdown.Item
                    key={_id}
                    content={full}
                    image={{
                      avatar: true,
                      src: profileImage,
                    }}
                    onClick={() => {
                      openModal(sendTodoModal(full, sendTodo, _id))
                    }}
                  />
                ))
              }
              {!loadingFriends && friends.length === 0 &&
                <Dropdown.Item
                  content="No friends"
                />
              }
            </PaddedMenu>
          </Dropdown>
        }
      />
    )
  }
}

export default SendTodoDropdown
