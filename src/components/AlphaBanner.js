import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { theme, roundedEdges } from './styles'

const banner = css`
  background-color: ${theme.colour.grey};
  color: ${theme.colour.white};
  padding-left: ${theme.spacing.xxxl}px;
  padding-right: ${theme.spacing.xxxl}px;
  padding-top: 12px;
  padding-bottom: ${theme.spacing.sm}px;
`

const alpha = css`
  font-size: ${theme.font.xs};
  margin-bottom: 0;
`

const statusBar = css`
  text-transform: uppercase;
  line-height: 2;
  color: white;
  position: relative;
  display: inline-block;
  font-size: ${theme.font.xs};
  bottom: 2px;
  padding: 2px ${theme.spacing.md}px;
  margin-right: ${theme.spacing.md}px;
  background-color: ${theme.colour.blueAlpha};
  ${roundedEdges};
`

const link = css`
  color: ${theme.colour.white};
  padding: 0;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p className={alpha}>
      <span className={statusBar}>
        <Trans>Alpha</Trans>
      </span>
      <Trans>This is an internal service.</Trans>{' '}
      <a
        className={link}
        href="mailto:paul.craig@cds-snc.ca?subject=Hey,%20I%20love%20your%20app!"
      >
        <Trans>To provide feedback, email us</Trans>
      </a>.
    </p>
  </div>
)

export default AlphaBanner
