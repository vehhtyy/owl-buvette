import React, { Component } from 'react'
import { Tooltip } from 'bootstrap/dist/js/bootstrap'

export class PlayersCommands extends Component {
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
      <div className='commands text-center'>
        {this.props.aboveChat
          ? null
          : (
            <>
              <button onClick={this.props.handleFlipX} type='button' className='btn btn-sm btn-link hide-on-mobile mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Placer à gauche ou à droite'>
                <i className='bi bi-arrow-left-right' />
              </button>
              <button onClick={this.props.handleFlipY} type='button' className='btn btn-sm btn-link hide-on-mobile mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Placer en haut ou en bas'>
                <i className='bi bi-arrow-down-up' />
              </button>
              <button onClick={this.props.handlePipActive} type='button' className='btn btn-sm btn-link hide-on-mobile mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Activer/désactiver le lecteur'>
                <i className='bi bi-eye' />
              </button>
            </>
            )}
        <button onClick={this.props.handleSwitchPlayer} type='button' className='btn btn-sm btn-link hide-on-mobile mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Inverser les deux lecteurs'>
          <i className='bi bi-arrow-repeat' />
        </button>
        <div className='btn-group dropup mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Changer la langue du cast'>
          <button type='button' className='btn btn-sm btn-link dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
            <i className='bi bi-chat-dots' />
          </button>
          <ul id='casts' className='dropdown-menu'>
            {this.props.casts.map((cast, index) => cast.disabled ? null : <li key={index}><a onClick={this.props.handleChangeCast} className='dropdown-item' href={cast.hash}>{cast.name}</a></li>)}
          </ul>
        </div>
        <div className='btn-group dropup mx-1' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Choix du thème'>
          <button type='button' className='btn btn-sm btn-link dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
            <i className='bi bi-palette' />
          </button>
          <ul id='themes' className='dropdown-menu'>
            {this.props.themes.map((theme, index) => theme.disabled ? null : <li key={index}><a onClick={this.props.handleSwitchTheme} className='dropdown-item' href={theme.hash}>{theme.name}</a></li>)}
          </ul>
        </div>
      </div>
    )
  }
}
