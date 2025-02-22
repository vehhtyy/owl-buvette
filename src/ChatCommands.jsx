import React, { Component } from 'react'
import { Tooltip } from 'bootstrap/dist/js/bootstrap'

export class ChatCommands extends Component {
  componentDidMount () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl, {
      placement: 'bottom',
      fallbackPlacements: ['bottom'],
      animation: false,
      trigger: 'hover'
    }))
  }

  render () {
    return (
      <div className='commands text-center hide-on-mobile'>
        {this.props.showChat
          ? (
            <button onClick={this.props.handleAboveChat} type='button' className='btn btn-sm btn-link mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Placer/enlever au-dessus du chat'>
              {this.props.aboveChat ? <i className='bi bi-box-arrow-left' /> : <i className='bi bi-box-arrow-in-right' />}
            </button>
            )
          : null}
        <button onClick={this.props.handleShowChat} type='button' className='btn btn-sm btn-link mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Basculer le chat'>
          {this.props.showChat ? <i className='bi bi-arrow-bar-right' /> : <i className='bi bi-arrow-bar-left' />}
        </button>
      </div>
    )
  }
}
