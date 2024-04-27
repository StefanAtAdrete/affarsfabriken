<?php

namespace Drupal\tiny_html_audio_player\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\file\Plugin\Field\FieldFormatter\FileMediaFormatterBase;

/**
 * Custom formatter audio fields that leverage tiny-player HTML audio player.
 *
 * @FieldFormatter(
 *   id = "tiny_html_audio_player",
 *   label = @Translation("tiny-player HTML audio player"),
 *   field_types = {
 *     "file"
 *   }
 * )
 */
class TinyHtmlAudioPlayerFormatter extends FileMediaFormatterBase {

  /**
   * {@inheritdoc}
   */
  public static function getMediaType() {
    return 'audio';
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];

    $source_files = $this->getSourceFiles($items, $langcode);
    if (empty($source_files)) {
      return $elements;
    }

    $attributes = $this->prepareAttributes();
    foreach ($source_files as $delta => $files) {
      foreach ($files as $file) {
        $elements[$delta][$file['file']->uuid()] = [
          '#type' => 'tiny_html_audio_player',
          '#title' => $items->getParent()->getValue()->label() ?? '',
          '#src' => \Drupal::service('file_url_generator')->generateAbsoluteString($file['file']->getFileUri()),
          '#src-type' => $file['file']->getMimeType(),
          '#attributes' => $attributes,
          '#cache' => ['tags' => $file['file']->getCacheTags()],
        ];
      }
    }

    return $elements;
  }

}
