<?php
/**
 * Plugin Name: rlj-blocks
 * Plugin URI: 
 * Description: rlj-blocks — is a Gutenberg plugin created via create-guten-block.
 * Author: Raffael Jesche
 * Author URI: https://www.rlj.me
 * Version: 0.1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
