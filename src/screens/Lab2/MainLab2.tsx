import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { User } from '../../models/User'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const data = {
  name: "Chưa có tên",
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
}
const colors = ['yellow','blue', 'white', 'green', 'orange', 'dark', 'red']
const MainLab2 = () => {
  const [user, setUser] = useState<User['data']>(data)
  const [footerColor, setFooterColor] = useState(colors[0])
  const [lastTime, setLastTime] = useState("Bạn chưa cập nhật thông tin")
  const onClickUpdate = useCallback((updatedUser: User['data']) => {
    setUser(updatedUser);
  }, []);
  const handleFooterColor = useCallback(() => {
    const numbeRandom = Math.floor(Math.random() * colors.length)
    setFooterColor(colors[numbeRandom])
  }, [])
  useEffect(() => {
    const currentDate = new Date()
    const dateTime =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear() +
      " " +
      currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds();
    setLastTime(dateTime)
  }, [user])
  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <Header data={user} />
      <Body onHandleChangeBGFooter={handleFooterColor} onHandleUpdate={onClickUpdate} />
      <Footer backgroundColor={footerColor} timeUpdate={lastTime} />
    </View>
  )
}

export default MainLab2