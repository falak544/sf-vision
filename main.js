document.addEventListener('DOMContentLoaded', function() {
  
    // كود تغيير النص عند الضغط على الزر
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      alert('لقد قمت بالضغط على الزر!');
    });
  
    // كود تغيير الخلفية عند الضغط على الزر
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', function() {
      document.body.style.backgroundColor = "#FF5733"; // تغيير لون الخلفية إلى الأحمر
    });
  
    // كود إخفاء وإظهار الـ nav عند الضغط على الزر
    const nav = document.querySelector('nav');
    const toggleButton = document.getElementById('toggleNav');
    toggleButton.addEventListener('click', function() {
      // التبديل بين الإظهار والإخفاء
      nav.classList.toggle('visible');
    });
  
    // كود التأثير عند تمرير الماوس على العناصر
    const elements = document.querySelectorAll('.hoverEffect');
  
    elements.forEach(function(element) {
      element.addEventListener('mouseover', function() {
        element.style.transform = 'scale(1.1)'; // تكبير العنصر
      });
  
      element.addEventListener('mouseout', function() {
        element.style.transform = 'scale(1)'; // العودة للحجم الطبيعي
      });
    });
    
  });