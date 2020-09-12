import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const ListMessages = (props) => {
  const { bid } = props
  // const currentUser = useSelector(state => state.currentUser)

  const currentUser = props.listing.landlord
  const styleOptions = (message) => {
    let alignment = currentUser.id === message.sender_id ? 'right' : 'left'
    let sender = currentUser.id === message.sender_id ? currentUser.email : sender.id
    return (
    {
      alignment: alignment,
      sender: sender
    }
    )
  }
  return (
    <List>
      {bid.messages.map(message => {
        return (
          <List.Item >
            <List.Content floated={styleOptions(message).alignment}>
              <List.Header style={{textAlign: styleOptions(message).alignment}} as="h4">{styleOptions(message).sender}</List.Header>
              <List.Description as='h5'>
                {message.body}
              </List.Description>
            </List.Content>
          </List.Item>
        )
      })}
    </List>
  )
}

export default ListMessages
