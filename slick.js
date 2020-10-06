$(document).ready(function(){
    2
      $('.demo').slick();
    3
    });
    $('.demo').slick({
        002
         
        003
          // Enables tabbing and arrow key navigation
        004
          accessibility:true,
        005
         
        006
          // Adapts slider height to the current slide
        007
          adaptiveHeight:false,
        008
         
        009
          // Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
        010
          appendArrows: $(element),
        011
         
        012
          // Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
        013
          appendDots: $(element),
        014
         
        015
          // Enable Next/Prev arrows
        016
          arrows:true,
        017
         
        018
          // Sets the slider to be the navigation of other slider (Class or ID Name)
        019
          asNavFor:null,
        020
         
        021
          // prev arrow
        022
          prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',
        023
         
        024
          // next arrow
        025
          nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',
        026
         
        027
          // Enables auto play of slides
        028
          autoplay:false,
        029
         
        030
          // Auto play change interval
        031
          autoplaySpeed: 3000,
        032
         
        033
          // Enables centered view with partial prev/next slides.
        034
          // Use with odd numbered slidesToShow counts.
        035
          centerMode:false,
        036
         
        037
          // Side padding when in center mode. (px or %)
        038
          centerPadding:'50px',
        039
         
        040
          // CSS3 easing
        041
          cssEase:'ease',
        042
         
        043
          // Custom paging templates.
        044
          customPaging:function(slider, i) {
        045
            return '<button type="button" data-role="none">' + (i + 1) +'</button>';
        046
          },
        047
         
        048
          // Current slide indicator dots
        049
          dots:false,
        050
         
        051
          // Class for slide indicator dots container
        052
          dotsClass:'slick-dots',
        053
         
        054
          // Enables desktop dragging
        055
          draggable:true,
        056
         
        057
          // animate() fallback easing
        058
          easing:'linear',
        059
         
        060
          // Resistance when swiping edges of non-infinite carousels
        061
          edgeFriction: 0.35,
        062
         
        063
          // Enables fade
        064
          fade:false,
        065
         
        066
          // Focus on select and/or change
        067
          focusOnSelect:false,
        068
          focusOnChange:false,
        069
         
        070
          // Infinite looping
        071
          infinite:true,
        072
         
        073
          // Initial slide
        074
          initialSlide: 0,
        075
         
        076
          // Accepts 'ondemand' or 'progressive' for lazy load technique
        077
          lazyLoad:'ondemand',
        078
         
        079
          // Mobile first
        080
          mobileFirst:false,
        081
         
        082
          // Pauses autoplay on hover
        083
          pauseOnHover:true,
        084
         
        085
          // Pauses autoplay on focus
        086
          pauseOnFocus:true,
        087
         
        088
          // Pauses autoplay when a dot is hovered
        089
          pauseOnDotsHover:false,
        090
         
        091
          // Target containet to respond to
        092
          respondTo:'window',
        093
         
        094
          // Breakpoint triggered settings
        095
          /* eg
        096
          responsive: [{
        097
         
        098
            breakpoint: 1024,
        099
            settings: {
        100
              slidesToShow: 3,
        101
              infinite: true
        102
            }
        103
         
        104
          }, {
        105
         
        106
            breakpoint: 600,
        107
            settings: {
        108
              slidesToShow: 2,
        109
              dots: true
        110
            }
        111
         
        112
          }, {
        113
         
        114
            breakpoint: 300,
        115
            settings: "unslick" // destroys slick
        116
         
        117
          }]
        118
          */
        119
          responsive:null,
        120
         
        121
          // Setting this to more than 1 initializes <a href="https://www.jqueryscript.net/tags.php?/grid/">grid</a> mode.
        122
          // Use slidesPerRow to set how many slides should be in each row.
        123
          rows: 1,
        124
         
        125
          // Change the slider's direction to become right-to-left
        126
          rtl:false,
        127
         
        128
          // Slide element query
        129
          slide: '',
        130
         
        131
          // # of slides to show at a time
        132
          slidesToShow: 1,
        133
         
        134
          // With grid mode intialized via the rows option, this sets how many slides are in each grid row.
        135
          slidesPerRow: 1,
        136
         
        137
          // # of slides to scroll at a time
        138
          slidesTo<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: 1,
        139
         
        140
          // Transition speed
        141
          speed: 500,
        142
         
        143
          // Enables touch swipe
        144
          swipe:true,
        145
         
        146
          // Swipe to slide irrespective of slidesToScroll
        147
          swipeToSlide:false,
        148
         
        149
          // Enables slide moving with touch
        150
          touchMove:true,
        151
         
        152
          // To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
        153
          touchThreshold: 5,
        154
         
        155
          // Enable/Disable CSS Transitions
        156
          useCSS:true,
        157
         
        158
          // Enable/Disable CSS Transforms
        159
          useTransform:true,
        160
         
        161
          // Disables automatic slide width calculation
        162
          variableWidth:false,
        163
         
        164
          // Vertical slide direction
        165
          vertical:false,
        166
         
        167
          // hanges swipe direction to vertical
        168
          verticalSwiping:false,
        169
         
        170
          // Ignores requests to advance the slide while animating
        171
          waitForAnimate:true,
        172
         
        173
          // Set the zIndex values for slides, useful for IE9 and lower
        174
          zIndex: 1000
        175
         
        176
        });
        5. API methods.
        
        01
        // destroys the plugin
        02
        $('.demo').unslick();
        03
         
        04
        // Triggers next slide
        05
        $('.demo').slickNext();
        06
         
        07
        // Triggers previous slide
        08
        $('.demo').slickPrev();
        09
         
        10
        // Pauses Autoplay
        11
        $('.demo').slickPause();
        12
         
        13
        // Starts Autoplay
        14
        $('.demo').slickPlay();
        15
         
        16
        // Goes to slide by index, skipping animation if second parameter is set to true
        17
        $('.demo').slickGoTo(index,dontAnimate);
        18
         
        19
        // Returns the current slide index
        20
        $('.demo').slickCurrentSlide();
        21
         
        22
        // Adds a slide. If an index is provided, will add at that index, or before if addBefore is set.
        23
        // If no index is provided, add to the end or to the beginning if addBefore is set.
        24
        // Accepts HTML String
        25
        $('.demo').slickAdd(element,index,addBefore);
        26
         
        27
        // Removes slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified.
        28
        // If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
        29
        $('.demo').slickRemove(index,removeBefore);
        30
         
        31
        // Filters slides using jQuery .filter syntax
        32
        $('.demo').slickFilter(filter);
        33
         
        34
        // Removes applied filter
        35
        $('.demo').slickUnfilter();
        36
         
        37
        // Gets an option value.
        38
        $('.demo').slickGetOption(option);
        39
         
        40
        // Changes a single option to given value; refresh is optional.
        41
        $('.demo').slickSetOption(option,value,refresh);
        42
         
        43
        // Gets Slick Object
        44
        $('.demo').getSlick();
        6. Event handlers.
        
        view source
        01
        // Before slide change callback
        02
        $('.demo').on('afterChange',function(event, slick, currentSlide){
        03
          // do something
        04
        });
        05
         
        06
        // Before slide change callback
        07
        $('.demo').on('beforeChange',function(event, slick, currentSlide, nextSlide){
        08
          // do something
        09
        });
        10
         
        11
        // Fires after a breakpoint is hit
        12
        $('.demo').on('breakpoint',function(event, slick, breakpoint){
        13
          // do something
        14
        });
        15
         
        16
        // When slider is destroyed, or unslicked.
        17
        $('.demo').on('destroy',function(event, slick){
        18
          // do something
        19
        });
        20
         
        21
        // Fires when an edge is overscrolled in non-infinite mode.
        22
        $('.demo').on('edge',function(event, slick, direction){
        23
          // do something
        24
        });
        25
         
        26
        // When Slick initializes for the first time callback.
        27
        // Note that this event should be defined before initializing the slider.
        28
        $('.demo').on('init',function(event, slick){
        29
          // do something
        30
        });
        31
         
        32
        // Every time Slick (re-)initializes callback
        33
        $('.demo').on('reInit',function(event, slick){
        34
          // do something
        35
        });
        36
         
        37
        // Every time Slick recalculates position
        38
        $('.demo').on('setPosition',function(event, slick){
        39
          // do something
        40
        });
        41
         
        42
        // Fires after swipe/drag
        43
        $('.demo').on('swipe',function(event, slick, direction){
        44
          // do something
        45
        });
        46
         
        47
        // Fires after image loads lazily
        48
        $('.demo').on('lazyLoaded',function(event, slick, image, imageSource){
        49
          // do something
        50
        });
        51
         
        52
        // Fires after image fails to load
        53
        $('.demo').on('lazyLoadError',function(event, slick, image, imageSource){
        54
          // do something
        55
        });
            