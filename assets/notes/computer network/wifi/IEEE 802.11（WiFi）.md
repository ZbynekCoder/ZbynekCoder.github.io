# IEEE 802.11（WiFi）

## WLAN中的冲突

<font color=#956FE7>隐藏站点问题：**竞争者距离太远**，导致两个竞争者互相感知不到对方</font>

<font color=#956FE7>暴露站点问题：**非竞争者距离太近**，导致非竞争者误以为信道被占用</font>

## 带冲突避免的多路访问MACA协议

见数据链路层

## 带冲突避免的载波侦听多路访问CSMA/CA协议

可靠协议：<font color=#956FE7>收到帧后会发送确认帧</font>

- 物理侦听：检查介质
- 虚拟侦听：跟踪NAV 
  - <font color=#956FE7>**站内**</font>跟踪
  - RTS/CTS机制：可选
- <font color=#BE191C>只能解决**隐藏站**问题</font>