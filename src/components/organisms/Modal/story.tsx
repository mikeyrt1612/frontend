import React, { Fragment, SyntheticEvent } from 'react'
import { storiesOf } from '@storybook/react'
import { Image, Checkbox, CheckboxProps } from 'semantic-ui-react'

import { IModalConfig } from '@store/modal/model'
import Modal from '.'

storiesOf('organisms/Modal', module)
  .add('string', () => (
    <Modal
      isOpen
      closeModal={() => {}}
      config={{
        header: {
          icon: 'trash alternate',
          label: 'Delete',
        },
        content: 'Are you sure you want to delete this?',
        action: {
          label: 'Delete',
          callback: () => {},
        },
      }}
    />
  ))
  .add('JSX', () => (
    <Modal
      isOpen
      closeModal={() => {}}
      config={{
        header: {
          icon: 'world',
          label: 'Travel to Mars',
        },
        content: (
          <Image src="https://amp.businessinsider.com/images/5b9235bb5c5e5254548b59f5-750-563.jpg"/>
        ),
        action: {
          label: 'Launch!',
          callback: () => {},
        },
      }}
    />
  ))
  .add('JSX with data', () => (
    <Modal
      isOpen
      closeModal={() => {}}
      config={{
        header: {
          icon: 'tasks',
          label: 'Select attributes',
        },
        content: (update) => {
          update({ creative: false, curious: false, cuddly: false })
          return (
            <Fragment>
              <Checkbox
                label="Creative"
                onChange={(event: SyntheticEvent, { checked }: CheckboxProps) => {
                  update({ creative: checked })
                }}
              />
              <br />
              <Checkbox
                label="Curious"
                onChange={(event: SyntheticEvent, { checked }: CheckboxProps) => {
                  update({ curious: checked })
                }}
              />
              <br />
              <Checkbox
                label="Cuddly"
                onChange={(event: SyntheticEvent, { checked }: CheckboxProps) => {
                  update({ cuddly: checked })
                }}
              />
            </Fragment>
          )
        },
        action: {
          label: 'Submit',
          callback: (data) => { console.log(data) },
        },
      } as IModalConfig<{
        creative: boolean,
        curious: boolean,
        cuddly: boolean,
      }>}
    />
  ))
  .add('disabled action', () => (
    <Modal
      isOpen
      closeModal={() => {}}
      config={{
        header: {
          icon: 'ban',
          label: 'Disabled action',
        },
        content: (update) => {
          update({ isDisabled: true })
          return (
            <Checkbox
              label="Disable?"
              defaultChecked
              onChange={(event: SyntheticEvent, { checked }: CheckboxProps) => {
                update({ isDisabled: checked })
              }}
            />
          )
        },
        action: {
          label: 'Submit',
          callback: () => {},
          disabled: ({ isDisabled }) => isDisabled,
        },
      } as IModalConfig<{ isDisabled: boolean }>}
    />
  ))
