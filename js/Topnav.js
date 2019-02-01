//Topnav display
document.write( '<div class=\"topnav\" id=\"myTopnav\">\n' );
document.write( '    <a href=\"./#home\">SHK</a>\n' );
document.write( '    <div class=\"topnav-menu\">\n' );
document.write( '        <button class=\"menu-icon\"><i class=\"fa fa-bars\"></i></button>\n' );
document.write( '      <div class=\"topnav-sections\">\n' );
document.write( '        <a href=\"./#portfolio\">Portfolio</a>\n' );
document.write( '        <a href=\"./#about-me\">About</a>\n' );
document.write( '        <a href=\"./#contact\">Contact</a>\n' );
document.write( '      </div>\n' );
document.write( '    </div>\n' );
document.write( '  </div>' );

//Toggle menu display on small screens
function dropdownToggle() {
    var dropdown = document.getElementsByClassName('topnav-sections')[0];
    dropdown.classList.toggle('topnav-sections_ToggleShow')

    var icon = document.getElementsByClassName('menu-icon')[0];
    icon.classList.toggle('menu-icon_Toggle')
}

document.querySelector('.menu-icon')
    .addEventListener('click', dropdownToggle);