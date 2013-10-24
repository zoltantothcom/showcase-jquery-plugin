;(function( $ ) {

    var props = {
        i:       0,
        total:   0,
        bool:    null,
        loop:    function() {},
        options: {}
    };


    var methods = {

        init : function ( options ) { 

            var defaults = {
                delay:       2000,
                tagClass:   'tags',
                itemClass:  'items',
                hoverClass: 'ahover'
            };


            this.options = $.extend( {}, defaults, options );

            var $tagsElement = $( "." + this.options.tagClass ),
                $itemElement = $( "." + this.options.itemClass );

            props.total   = $itemElement.children().length;
            props.options = this.options;
            props.tags    = $tagsElement;
            props.items   = $itemElement;

            methods.startLoop();

            return this.each( function() {

                $tagsElement.children().add( $itemElement.children() )
                    .mouseover( function( e ) {
                        props.bool = $(e.currentTarget).parent().hasClass( props.options.tagClass );

                        clearInterval( props.loop );
                        methods.cleanAll();
                        methods.showRelated( $(this), props.bool );
                    })
                    .mouseleave( function() {
                        if ( ! props.bool ) {
                            props.i = $(this).index() + 1;
                        }

                        methods.cleanAll();
                        methods.startLoop( this.options );
                    });

            });  
        },

        startLoop : function () {
            props.loop = setInterval( function() {
                props.i = ( props.i === props.total ) ? 0 : props.i;

                methods.cleanAll();
                methods.showRelated( props.items.children().eq( props.i ), false );
                
                props.i++;
            }, props.options.delay );
        },

        showRelated : function ( obj, bool ) {
            $( obj ).find( "img" ).stop().animate({ opacity: 0 });

            var tagList = obj.data( "tags" ).split( /\s+/ );

            $.each( tagList, function( index, tag ) {
                props.tags.find( "[data-tags*=" + tag + "]" ).addClass( props.options.hoverClass );

                if ( bool === true ) {
                    props.items.children( "[data-tags*=" + tag + "]" ).find( "img" ).stop().animate({ opacity: 0 });
                }
            });
        },

        cleanAll: function () {
            props.items.children().find( "img" ).stop().animate({ opacity: 1 });
            props.tags.children().removeClass( props.options.hoverClass );
        }

    };

    $.fn.showcase = function ( method ) {
        if ( methods[method] ) {
            return methods[ method ]
                .apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( "Method " +  method + " doesn't exist on jQuery.showcase" );
        }    
    };

})( jQuery );
