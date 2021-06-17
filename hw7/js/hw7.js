$( function() {
    $( "#Carrot, #Banana, #Meat, #Peanut").draggable();
    $( "#Rabbit" ).droppable({
        accept: "#Carrot",
        classes: {
        "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
        $( this )
            .addClass( "highlight" )
            .find( "p" )
            .html( "Yum! Thank you!" );
        }
    });
    $( "#Lion" ).droppable({
        accept: "#Meat",
        classes: {
        "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
        $( this )
            .addClass( "highlight" )
            .find( "p" )
            .html( "Yum! Thank you!" );
        }
    });
    $( "#Monkey" ).droppable({
        accept: "#Banana",
        classes: {
        "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
        $( this )
            .addClass( "highlight" )
            .find( "p" )
            .html( "Yum! Thank you!" );
        }
    });
    $( "#Elephant" ).droppable({
        accept: "#Peanut",
        classes: {
        "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
        $( this )
            .addClass( "highlight" )
            .find( "p" )
            .html( "Yum! Thank you!" );
        }
    });
  } );

$( function() {
    $( "#THSorter" ).sortable();
    $( "#THSorter" ).disableSelection();
} );

$( function() {
    $( "input" ).checkboxradio({
        icon: false
    });
} );

$( function() {
    $( "#popup" ).dialog();
} );

$( function() {
    $( "#resizable" ).resizable({
        handles: "se"
    });
} );

$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
} );