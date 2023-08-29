import React from 'react'
import List from '../components/List'
import LocationHeader from '../components/LocationHeader'
//tıklanan lokasyonda olan etkinlinler çıkacak
const Location = () => {
  return (
    <div>
//seçilen konuma ait bir header koy
  <LocationHeader></LocationHeader>

 // konumdaki etkinlikleri listele
    <List></List>



    </div>
  )
}

export default Location