import "./header.css"
import React from "react";
import Logo from "./img/logo.svg"


export const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <img className="logo" alt="Logo" src={Logo} />
         
         
        <div data-collapse="medium" data-animation="default" data-duration="400" data-contain="1" class="w-nav navbar">
          <div id="navbar" class="w-container container">
            <a href="http://apihouse.ru/#navbar" class="w-nav-brand">
              <img width="230" src="./Apihouse _ Апидомик — ваш домашний санаторий_files/logo.png" class="logo" />
            </a>
            <div class="w-clearfix phoneblock">
              <img width="24" src="./Apihouse _ Апидомик — ваш домашний санаторий_files/phone.png" class="phoneicon" />
              <div class="phone">8 499-390-25-83</div>
              <a href="http://apihouse.ru/#" data-ix="call-back" class="w-button button callback" style="transition: background-color 0.2s ease 0s;">заказать звонок</a>
            </div>

            <nav role="navigation" class="w-nav-menu w-clearfix navmenu">
		          <a href="#hero" class="w-nav-link navlink"><span>Что такое АПИДОМИК?</span></a>
		          <a href="#good" class="w-nav-link navlink"><span>Польза</span></a>
		          <a href="#gallery" class="w-nav-link navlink"><span>галерея</span></a>
		          <a href="#testimonials" class="w-nav-link navlink"><span>отзывы</span></a>
		          <a href="#order" class="w-nav-link navlink"><span>Заказать</span></a>
		        </nav>

            <div class="w-nav-button w-clearfix menu-button">
              <div class="w-icon-nav-menu menu-icon"></div>
              <div class="navlink open">меню</div>
            </div>
            
          </div>
        <div class="w-nav-overlay" data-wf-ignore="">
      </div>
      </div></div>
    </header>  
  )
};


 