// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 장바구니 버튼 기능
    const addToCartButtons = document.querySelectorAll('.product .btn');
    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.closest('.product');
                const productName = product.querySelector('h3').textContent;
                alert(`${productName}이(가) 장바구니에 추가되었습니다!`);
                // 여기에 실제 장바구니 로직 구현 가능
            });
        });
    }

    // 모바일 메뉴 토글 (나중에 구현 예정)
}); 