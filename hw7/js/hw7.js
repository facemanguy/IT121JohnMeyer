$( function() {
    $( "#Carrot" ).draggable();
    $( "#Rabbit" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

$( function() {
    $( "#datepicker" ).datepicker();
} );