<?php
/**
 * Plugin Name: rlj-blocks
 * Plugin URI:
 * Description: Custom Gutenberg blocks - videolink, section with background image, experimental gallery image title attributes
 * Author: Raffael Jesche
 * Author URI: https://www.rlj.me
 * Version: 0.2.3
 * License: MIT
 * License URI:
 *
 * @package CGB
 */

if (!defined('ABSPATH')) exit;

require_once(__DIR__ . '/src/init.php');


// change gallery captions to titles - experimental

\add_filter( 'render_block', 'rlj_replace_gallery_image_captions_with_titles', 10, 2 );

function rlj_replace_gallery_image_captions_with_titles( $block_content, $block ) {

    if ($block['blockName'] !== 'core/gallery'
        || !isset($block['attrs']['captionsToTitles'])
        || $block['attrs']['captionsToTitles'] != 1
        ) {
        return $block_content;
    }

// for debugging:
// return '<pre style="color:#000;">' . print_r($block, true) . '</pre>';

    $nl2br_regex   = '/\<br(\s*)?\/?\>/i';
    $nl2br_replace = "\r\n";

    if (!isset($block['attrs']['linkTo'])) {

        // format (without link)
        // <img ... class="wp-image-455"/><figcaption ...>...</figcaption></figure>

        // move caption to image (no link)
        return preg_replace_callback(

            // fails if caption contains '<br>'
            /* "#/><figcaption.*?>([^<]+)</figcaption>#", */

            "#/><figcaption.*?>(.*?)</figcaption>#",

            function($match) use ($nl2br_regex, $nl2br_replace) {
                $str = trim($match[1]);
                $str = preg_replace($nl2br_regex, $nl2br_replace, $str);
                $str = htmlspecialchars(strip_tags($str));

                return ' title="' . $str . '" />';
            },
            $block_content

        );

    }

    if (isset($block['attrs']['linkTo'])) {

        // format (with link)
        // <a ...><img ... class="wp-image-455"/></a><figcaption ...>...</figcaption></figure>

        // move caption to link
        return preg_replace_callback(

            // fails if caption contains '<br>'
            /* "#<a.*?>(.*?)</a><figcaption.*?>([^<]+)</figcaption>#", */

            // match everything inside figcaption
            "#<a.*?>(.*?)</a><figcaption.*?>(.*?)</figcaption>#",

            function($match) use ($nl2br_regex, $nl2br_replace) {

// return '<pre style="color:#000;">' . print_r($match, true) . '</pre>';

                $str = trim($match[2]);
                $str = preg_replace($nl2br_regex, $nl2br_replace, $str);
                $str = htmlspecialchars(strip_tags($str));

                return preg_replace(
                    [
                        "#<figcaption.*?>(.*?)</figcaption>#", // remove figcaption
                        "#^<a href#" // replace first link (caption may have links, too)
                    ],
                    [
                        '',
                        '<a title="'.$str.'" href'
                    ],
                    $match[0]
                );

            },
            $block_content
        );

    }

}
