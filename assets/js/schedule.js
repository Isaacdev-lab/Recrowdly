$(function () {

  // Whitelist buttons in popovers
  var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList
  myDefaultWhiteList.button = [];

  // Customizer popover
  var $tip = $('.btn-donate').popover({
    trigger: 'manual', // We don't want popover to launch when we don't need it :)
    html: true,
    offset: '-100px, 0',
    container: 'body',
    content: function () {
      return '<p>' + $(this).data('description') + '</p><button class="btn btn-sm btn-dismiss white-text z-depth-0 pr-0">Got it</button>';
    },
    template: '<div class="popover popover-blue" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>'
  });

  // Manually show popover
  $tip.popover('show');

  // Handle popover dismiss
  $('.btn-dismiss').on('click', function () {
    $tip.popover('hide');
  });
});