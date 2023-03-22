import React, { ReactElement } from 'react'
import { Text } from 'toolkit'
import styled, { keyframes } from 'styled-components'
import orderBy from 'lodash/orderBy'

// console.log(document.location)

const OfficeMenu = ({ tabs, active = "home" }) => {

  const Menue = styled.div`
    display: flex;
    width: 100%;
    margin: 20px 40px;
    min-height: 20px;
    border-left: 1px solid ${(active === "" || active === tabs[0].href) ? '#ACF800' : "#191326"};
  ` 

  const MenueTab = styled.div`
    border-right: 1px solid #191326;

    &.active {
        border-right: 1px solid #ACF800;
    }

    &.next--active {
        border-right: 1px solid #ACF800;
    }
  ` 

  const menues : ReactElement[] = [];

  tabs.forEach((tab, index) => {
    let menueClass = (tab.href === active) ? "active" : "";
    let tabUrl = "?tab=";

    if (active === "" && index === 0){ 
        menueClass += " first--active";
    }

    if (index > 0) {
        if(tabs[index - 1].href === active){ 
            menueClass += " prev--active";}
    }

    if (index < tabs.length - 1) {
        if(tabs[index + 1].href === active) menueClass += " next--active";
    }

    tabUrl += tab.href;

    menues.push(
        <MenueTab className={menueClass}>
            <a href={tabUrl}>
                <Text color={(tab.href === active) ? "primary" : "invertedContrast"} 
                 fontWeight="300"
                 ml="20px" mr="20px" >{tab.tab}</Text>
            </a>
        </MenueTab>
    )
  })
  
  return (
    <Menue>
       {menues}
    </Menue>
  )
}

export default OfficeMenu