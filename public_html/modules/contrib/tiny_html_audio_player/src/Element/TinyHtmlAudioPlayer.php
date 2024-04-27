<?php

namespace Drupal\tiny_html_audio_player\Element;

use Drupal\Core\Render\Element\RenderElement;

/**
 * Providers an element for tiny html audio player.
 *
 * @RenderElement("tiny_html_audio_player")
 */
class TinyHtmlAudioPlayer extends RenderElement {

  /**
   * {@inheritdoc}
   */
  public function getInfo() {
    return [
      '#theme' => 'tiny_html_audio_player',
      '#title' => NULL,
      '#src_type' => NULL,
      '#src' => NULL,
      '#attributes' => NULL,
      '#attached' => [
        'library' => [
          'tiny_html_audio_player/tiny_html_audio_player',
          'tiny_html_audio_player/fa_css',
        ],
      ],
    ];
  }

}
