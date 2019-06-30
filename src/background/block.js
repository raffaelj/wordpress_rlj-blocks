
// https://javascriptforwp.com/how-to-use-inspectorcontrols/
// https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/cover/edit.js
// https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
// https://developer.wordpress.org/resource/dashicons/
// https://wordpress.org/gutenberg/handbook/block-api/

// <pre>{JSON.stringify(props, null, 2)}</pre>

//  Import CSS.
// import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;

const {
  registerBlockType,
} = wp.blocks;

const {
	BlockControls,
	BlockIcon,
  InnerBlocks,
  InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} = wp.editor;
const {
	IconButton,
	Toolbar,
  Button,
  FormToggle,
} = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];
const IMAGE_BACKGROUND_TYPE = 'image';


registerBlockType( 'rlj/background', {

	title: __( 'Background' ),
	icon: 'smiley',
	category: 'common', // common, formatting, layout widgets, embed.
	keywords: [
		__( 'rlj-blocks' ),
		__( 'Background' ),
		__( 'Wrapper' ),
	],
  supports: {
      // align: true,
      align: [
          'full',
          'wide'
      ],
      anchor: false
  },
  attributes: {
		"url": {
			"type": "string"
		},
		"id": {
			"type": "number"
		},
		"hasParallax": {
			"type": "boolean",
			"default": false
		},
		// "dimRatio": {
			// "type": "number",
			// "default": 50
		// },
		// "overlayColor": {
			// "type": "string"
		// },
		// "customOverlayColor": {
			// "type": "string"
		// },
		// "backgroundType": {
			// "type": "string",
			// "default": "image"
		// },
		// "focalPoint": {
			// "type": "object"
		// }
  },

	edit: function( props ) {

    function onSelectImage( media ) {
      if ( ! media || ! media.url ) {
        props.setAttributes( {
          url: undefined,
          id: undefined,
        } );
        return;
      }
    }
    
    function removeImage(e) {
      if(e) e.preventDefault();
      
      props.setAttributes( {
        url: undefined,
        id: undefined,
      } );
    }
    
    function toggleHasParallax() {
      props.setAttributes( {
        hasParallax: !props.attributes.hasParallax
      } );
    }

    var style = null;
    var classes = props.className;
    // var classes = '';

    if (props.attributes.url) {

      style = {
        backgroundImage: 'url(' + props.attributes.url + ')'
      };
      
      classes += ' has-background';
      
      if (props.attributes.hasParallax) {
          classes += ' has-parallax';
      }

    }

    return [
      <InspectorControls>
          <MediaPlaceholder
            labels={ {
              title: __( 'Background' ),
              instructions: __( 'Upload an image or pick one from your media library.' ),
            } }
            onSelect={ media => { props.setAttributes({ id: media.id, url: media.url }); } }
            accept="image/*"
            allowedTypes={ ALLOWED_MEDIA_TYPES }
            notices={ props.noticeUI }
            onError={ props.onUploadError }
          />
          <div class="components-panel__row">
            <Button 
              onClick={ removeImage }
              className="button button-large"
            >
            { __('Remove background') }
            </Button>
          </div>
          <div class="components-panel__row">
            <label
                htmlFor="rlj-background-has-parallax"
            >
                { __( 'Fixed background', 'rlj' ) }
            </label>
            <FormToggle
                id="rlj-background-has-parallax"
                label={ __( 'Fixed background', 'rlj' ) }
                checked={ props.attributes.hasParallax }
                onChange={ toggleHasParallax }
            />
          </div>
      </InspectorControls>
      ,
      <div
        className={ classes }
        style={ style }
      >
        <InnerBlocks />
      </div>
    ];

	},

	// save: function( props ) {
	save: function( props ) {

    var style = null;
    // var classes = props.className;
    var classes = '';
    
    if (props.attributes.url) {

      style = {
        backgroundImage: 'url(' + props.attributes.url + ')'
      };
      
      classes += ' has-background';
      
      if (props.attributes.hasParallax) {
          classes += ' has-parallax';
      }

    }

    return (
      <div
        className={ classes }
        style={ style }
      >
        <InnerBlocks.Content />
      </div>
    );
  },

} );
