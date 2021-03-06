import React from 'react';
import { connect } from 'react-redux';

import { translate } from '../../base/i18n';

import AbstractPageReloadOverlay from './AbstractPageReloadOverlay';
import FilmstripOnlyOverlayFrame from './FilmstripOnlyOverlayFrame';

/**
 * Implements a React Component for page reload overlay for filmstrip only
 * mode. Shown before the conference is reloaded. Shows a warning message and
 * counts down towards the reload.
 */
class PageReloadFilmstripOnlyOverlay extends AbstractPageReloadOverlay {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        const { message, timeLeft, title } = this.state;

        return (
            <FilmstripOnlyOverlayFrame>
                <div className = 'inlay-filmstrip-only__container'>
                    <div className = 'inlay-filmstrip-only__title'>
                        { t(title) }
                    </div>
                    <div className = 'inlay-filmstrip-only__text'>
                        { t(message, { seconds: timeLeft }) }
                    </div>
                </div>
                { this._renderButton() }
                { this._renderProgressBar() }
            </FilmstripOnlyOverlayFrame>
        );
    }
}

export default translate(connect()(PageReloadFilmstripOnlyOverlay));
