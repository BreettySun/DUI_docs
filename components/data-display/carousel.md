# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

### 基本用法

<style>
d-carousel {
	width: 100%;
	height: 260px;
	margin: 20px auto;
}

d-carousel a img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.carousel-item {
  height: 100%; 
  color: white; 
  text-align: center;
  line-height: 200px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 24px;
}
</style>

<d-carousel autoplay delay="3000" indicator-position="bottom" style="height:200px;margin-top:10px">
  <div class="carousel-item" style="background-color: #1890ff; "> 幻灯片 1 </div>
  <div class="carousel-item" style="background-color: #52c41a; "> 幻灯片 2 </div>
  <div class="carousel-item" style="background-color: #fa8c16;" > 幻灯片 3 </div>
</d-carousel>

```HTML
<d-carousel autoplay delay="3000" indicator-position="bottom" style="height:200px;margin-top:10px">
  <div class="carousel-item" style="background-color: #1890ff; "> 幻灯片 1 </div>
  <div class="carousel-item" style="background-color: #52c41a; "> 幻灯片 2 </div>
  <div class="carousel-item" style="background-color: #fa8c16;" > 幻灯片 3 </div>
</d-carousel>
```

### 调整指示器位置

<d-carousel class="custom-carousel" autoplay delay="2000" indicator-position="right">
    <a target="_blank"
        href="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg">
        <img src="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg"
            alt="picture-1" />
    </a>
    <a target="_blank"
        href="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg">
        <img src="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg"
            alt="picture-2" />
    </a>
    <a target="_blank"
        href="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg">
        <img src="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg"
            alt="picture-3" />
    </a>
</d-carousel>

```HTML
<d-carousel class="custom-carousel" autoplay delay="2000" indicator-position="right">
    <a target="_blank"
        href="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg">
        <img src="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg"
            alt="picture-1" />
    </a>
    <a target="_blank"
        href="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg">
        <img src="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg"
            alt="picture-2" />
    </a>
    <a target="_blank"
        href="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg">
        <img src="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg"
            alt="picture-3" />
    </a>
</d-carousel>
```
