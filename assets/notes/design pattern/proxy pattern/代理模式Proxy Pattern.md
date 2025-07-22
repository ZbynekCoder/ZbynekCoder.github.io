# 代理模式

##  模式定义

给某一个对象提供一个代理，并由代理对象控制对原对象的引用

- <font color=#956FE7>**对象结构型模式**</font>

## 模式结构

![img](assets/9dd4601850c645ef83f1f649da9cf2ea.png)

- Subject：抽象主题角色
- Proxy：代理主题角色
- RealSubject：真实主题角色

代理类实现代码

```java
public class Proxy implements Subject {
    private RealSubject realSubject = new RealSubject();

    public void preRequest() {
        ...
    }

    public void request() {
        preRequest();
        realSubject.request();
        postRequest();
    }

    public void postRequest() {
        ...
    }

}
```
