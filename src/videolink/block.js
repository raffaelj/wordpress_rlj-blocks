const { __ } = wp.i18n;

const {
  registerBlockType,
} = wp.blocks;

const {
  // BlockControls,
  // BlockIcon,
  // InnerBlocks,
  InspectorControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  // withColors,
  // PanelColorSettings,
} = wp.blockEditor;

const {
  // IconButton,
  // Toolbar,
  Button,
  FormToggle,
  // Panel,
  PanelBody,
  PanelRow,
  SelectControl,
  TextControl,
} = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'rlj/videolink', {

  title: __( 'Videolink' ),
  icon: 'format-video',
  category: 'embed', // common, formatting, layout widgets, embed
  keywords: [
    __( 'rlj-blocks' ),
    __( 'Video' ),
    __( 'YouTube' ),
    __( 'Vimeo' ),
  ],
  attributes: {
    'url': {
      'type': 'string'
    },
    'text': {
      'type': 'string'
    },
    'title': {
      'type': 'string'
    },
    'id': {
      'type': 'string'
    },
    'provider': {
      'type': 'string',
    },
    'width': {
      'type': 'integer'
    },
    'height': {
      'type': 'integer'
    },
    'ratio': {
      'type': 'string',
      'default': '16-9'
    },
    'asset_id': {
      'type': 'string'
    },
    'asset_url': {
      'type': 'string'
    },
    'asset_size': {
      'type': 'string'
    },
    'asset_sizes': {
      'type': 'object'
    },
    'displayText': {
      'type': 'boolean',
      'default': true
    },
  },

  edit: function( props ) {

    var MODULE_EXISTS  = typeof COCKPIT_VIDEOLINK_ROUTE != 'undefined',
        isWPMultiplane = typeof COCKPIT_UPLOAD_FOLDER != 'undefined';

    function updateUrl(value) {

      if (!MODULE_EXISTS) {
        console.log('module VideoLinkField is missing or not configured correctly');
        return;
      }

      var url   = value,
          video = parseVideoUrl(url),
          meta  = {
            video_id: video.id,
            video_provider: video.provider
          };

      if (video.id && video.id != 'none') {

        props.setAttributes({
          provider: video.provider,
          id: video.id,
          url: url
        });

        jQuery.ajax({
          url: COCKPIT_VIDEOLINK_ROUTE + '/getVideoLinkData',
          type: 'post',
          data: meta,
          success:function(data) {
            props.setAttributes(isWPMultiplane ? {
              width:      data.width,
              height:     data.height,
              asset_id:   data._id,
              text:       data.title,
              asset_url:  COCKPIT_UPLOAD_FOLDER + data.path
            } : {
              width:      data.meta.width,
              height:     data.meta.height,
              asset_id:   data.ID,
              text:       data.post_title,
              asset_url:  data.guid
            });
          },
          error: function(errorThrown){
            console.log(errorThrown);
          }
        });

      }
      else {
        props.setAttributes({
          provider: null,
          id: null,
          url: null,
          text: null,
          asset_id: null,
          asset_url: null,
          width: null,
          height: null
        });

      }

    }

    function parseVideoUrl(url) {

        var video = {};
        var regExpYouTube = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var regExpVimeo   = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

        var match = url.match(regExpYouTube);

        if (match && match[2].length == 11) {
            video.id       = match[2];
            video.provider = 'youtube';
        }

        else {
            match = url.match(regExpVimeo);
            if (match) {
                video.id       = match[3];
                video.provider = 'vimeo';
            }
            else {
                video.id       = 'none';
                video.provider = 'none';
            }
        }
        return video;
    }

    function getImageSizeOptions() {

      if (typeof props.attributes.asset_sizes == 'object') {
        return Object.keys(props.attributes.asset_sizes)
                .map(function(k) { return {label:k, value:k}; });
      }

      return [];

    }

    var style = {textAlign:'center'};
    var image_style = {display:'block',margin:'0 auto'};
    var classes = 'video_embed_container ratio-' + props.attributes.ratio;

    return [
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <TextControl
              label={ __('Url') }
              value={props.attributes.url}
              help={ __('Enter a YouTube or Vimeo link.') }
              onChange={updateUrl}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={ __('Text') }
              value={props.attributes.text}
              onChange={ (value) => { props.setAttributes({text:value}) } }
            />
          </PanelRow>
          <PanelRow>
            <label
              htmlFor="rlj-videolink-display-text"
            >
                { __( 'Display text', 'rlj' ) }
            </label>
            <FormToggle
              id="rlj-videolink-display-text"
              label={ __( 'Display text', 'rlj' ) }
              checked={ props.attributes.displayText }
              onChange={ () => { props.setAttributes({ displayText: !props.attributes.displayText }); } }
            />
          </PanelRow>
          <PanelRow>
            <SelectControl
              label={ __( 'Aspect Ratio' ) }
              value={ props.attributes.ratio || '' }
              options={ [{label:'16:9',value:'16-9'},{label:'4:3',value:'4-3'}] }
              onChange={ (ratio) => { props.setAttributes({ ratio: ratio }); } }
            />
          </PanelRow>
          <PanelRow>
            <p>{ __('Thumbnails are stored in your media library.') }</p>
          </PanelRow>

          { !props.attributes.asset_url && (
          <PanelRow>
            <MediaPlaceholder
              labels={ {
                title: __( 'Thumbnail' ),
                instructions: __( 'Upload an image or pick one from your media library.' ),
              } }
              onSelect={ media => {
                // console.log(media);
                props.setAttributes({
                  asset_id: media.id,
                  asset_url: media.url,
                  asset_sizes: media.sizes
                  });
                if (props.attributes.asset_size && media.sizes[props.attributes.asset_size]) {
                  props.setAttributes({
                    url: media.sizes[props.attributes.asset_size].url
                  })
                }
              } }
              accept='image/*'
              allowedTypes={ ALLOWED_MEDIA_TYPES }
              notices={ props.noticeUI }
              onError={ props.onUploadError }
            />
          </PanelRow>
          ) }

          { props.attributes.asset_url && (
          <PanelRow>
            <img src={ props.attributes.asset_url } style={ image_style } />
          </PanelRow>
          ) }

          { props.attributes.asset_url && (
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={ media => {
                  props.setAttributes({
                    asset_id: media.id,
                    asset_url: media.url,
                    asset_sizes: media.sizes });
                  if (props.attributes.asset_size && media.sizes[props.attributes.asset_size]) {
                    props.setAttributes({
                      url: media.sizes[props.attributes.asset_size].url
                    })
                  }
                } }
                allowedTypes={ ALLOWED_MEDIA_TYPES }
                value={ props.attributes.asset_id }
                render={ ( { open } ) => (
                  <Button
                    onClick={ open }
                    className="button button-large"
                  >
                  { __('Change thumbnail') }
                  </Button>
                ) }
              />
            </MediaUploadCheck>
          </PanelRow>
          ) }

          { props.attributes.asset_url && (
          <PanelRow>
            <SelectControl
              label={ __( 'Image Size' ) }
              value={ props.attributes.asset_size || '' }
              options={ getImageSizeOptions() }
              onChange={ (size) => { props.setAttributes({ asset_size: size, asset_url: props.attributes.asset_sizes[size].url }); } }
            />
          </PanelRow>
          ) }

        </PanelBody>
      </InspectorControls>
      ,
      <div
        style={style}
      >
        <div
          class={ classes }
        >
        { (!props.attributes.id || props.attributes.id == 'none') && (
          <TextControl
            label={ __('Url') }
            value={props.attributes.url}
            help={ __('Enter a YouTube or Vimeo link.') }
            onChange={updateUrl}
          />
        ) }
        { (props.attributes.id && props.attributes.asset_url) && (
          <img
            src={props.attributes.asset_url}
            alt="video thumbnail"
          />
        ) }
        { (props.attributes.id && props.attributes.asset_url) && (
        <span
          href="#"
          class="icon-play"
          aria-label={__('Play')}
        ></span>
        ) }
        </div>
        { (props.attributes.id && props.attributes.asset_url) && (
          <a
            href={props.attributes.url}
            title={props.attributes.title}
            data-video-provider={props.attributes.provider}
            data-video-id={props.attributes.id}
            data-video-width={props.attributes.width}
            data-video-height={props.attributes.height}
            data-video-thumb={props.attributes.asset_url}
          >
          {props.attributes.displayText ? props.attributes.text : ''}
          </a>
        ) }
      </div>
    ];

  },

  save: function( props ) {

    var src = '', href = '';

    if (props.attributes.provider == 'youtube') {
      src = 'https://www.youtube-nocookie.com/embed/' + props.attributes.id + '?enablejsapi=1&rel=0&showinfo=0&autoplay=1';
      href = 'https://www.youtube.com/watch?v=' + props.attributes.id;
    } else if (props.attributes.provider == 'vimeo') {
      src = 'https://player.vimeo.com/video/' + props.attributes.id + '?color=ffffff&title=0&byline=0&portrait=0&autoplay=1';
      href = 'https://vimeo.com/' + props.attributes.id;
    }

    var classes = 'video_embed_container ratio-' + props.attributes.ratio;
    var style = {
      backgroundImage: 'url(' + props.attributes.asset_url + ')'
    };

    var iframe = (
      <div
        class={classes}
      >
        <iframe
          class="video_embed"
          src="about:blank"
          data-src={src}
          data-provider={props.attributes.provider}
          style={ style }
          width={props.attributes.width}
          height={props.attributes.height}
          allow="autoplay; fullscreen"
          allowfullscreen=""
          title={__('Video')}
        ></iframe>
        <a
          href="#"
          class="icon-play"
          aria-label={__('Play')}
        ></a>
    </div>
    );

    return (
      <div>
        {iframe}
        { props.attributes.displayText && (
          <a
            href={ href }
          >
            { props.attributes.text }
          </a>
        ) }
      </div>
    );

  },

} );
